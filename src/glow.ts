// The ground is a shade lighter around the pointer, and the light reads how the pointer moves.
//
// Slow, steady movement leaves it wide and soft. Fast or jittery movement makes it tighten and
// dim, and it takes a few seconds to open up again. Hold still for a while and it starts to
// breathe, about six times a minute. Rest the pointer on a link and the light leaves the pointer
// and settles on the link, a little narrower and brighter. styles.css draws it from --glow-x, --glow-y, --glow-r,
// --glow and --glow-tense.

const root = document.documentElement;
const FOLLOW = 5; // per second: how closely the light trails the pointer
const WIDE = 620; // CSS px: the light's radius at rest
const TIGHT = 280; // and when agitated
const SOFT = 0.8; // its strength at rest
const DIM = 0.62; // and when agitated
const FAST = 1400; // px/s: a speed that counts as fully agitated
const SLOW = 180; // px/s: below this, movement is calm
const TWITCHY = 14; // rad/s of turning that counts as fully agitated
const STARTLE = 0.35; // seconds to tense up
const SETTLE = 2.8; // seconds to relax again
const STILL = 8; // seconds without movement before the breathing starts
const BREATH = 10; // seconds per breath
const ATTEND = 0.45; // seconds for the light to settle on a link
const RELEASE = 0.3; // and to let go of it
const NARROW = 0.72; // its radius on a link, as a share of what it would be
const LIFT = 1.2; // and its strength

const toward = (seconds: number, dt: number) => 1 - Math.exp(-dt / seconds);
const clamp = (value: number) => Math.min(1, Math.max(0, value));

if (matchMedia('(hover: hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const at = { x: 0, y: 0, on: 0 };
  const to = { x: 0, y: 0, on: 0 };
  let frame = 0;
  let last = 0;
  // what the pointer has done since the last frame
  let moved = 0;
  let turned = 0;
  let heading: number | null = null;
  // what the light makes of it
  let speed = 0;
  let turning = 0;
  let tension = 0;
  let still = 0;
  let breath = 0;
  let phase = 0;
  // the link under the pointer, and how far the light has settled on it
  let link: Element | null = null;
  let held = { x: 0, y: 0 };
  let attending = 0;

  const tick = (now: number) => {
    const dt = Math.min(Math.max(now - last, 0) / 1000, 0.1);
    last = now;
    if (dt > 0) {
      speed += (moved / dt - speed) * toward(0.25, dt);
      turning += (turned / dt - turning) * toward(0.4, dt);
      still = moved > 0 ? 0 : still + dt;
      moved = turned = 0;

      // turning only counts while the pointer is actually travelling
      const felt = clamp(Math.max((speed - SLOW) / (FAST - SLOW), (turning / TWITCHY) * clamp(speed / SLOW)));
      tension += (felt - tension) * toward(felt > tension ? STARTLE : SETTLE, dt);
      breath += ((still > STILL ? 1 : 0) - breath) * toward(still > STILL ? 4 : 0.6, dt);
      phase += (dt / BREATH) * Math.PI * 2;

      if (link) {
        const box = link.getBoundingClientRect();
        held = { x: box.left + box.width / 2, y: box.top + box.height / 2 };
      }
      attending += ((link ? 1 : 0) - attending) * toward(link ? ATTEND : RELEASE, dt);

      const follow = toward(1 / FOLLOW, dt);
      at.x += (to.x + (held.x - to.x) * attending - at.x) * follow;
      at.y += (to.y + (held.y - to.y) * attending - at.y) * follow;
      at.on += (to.on - at.on) * follow;
    }
    const swell = breath * Math.sin(phase);
    const radius = (WIDE + (TIGHT - WIDE) * tension) * (1 + 0.1 * swell) * (1 + (NARROW - 1) * attending);
    const strength = Math.min(1, (SOFT + (DIM - SOFT) * tension) * (1 + 0.24 * swell) * (1 + (LIFT - 1) * attending));
    root.style.setProperty('--glow-x', `${at.x.toFixed(1)}px`);
    root.style.setProperty('--glow-y', `${at.y.toFixed(1)}px`);
    root.style.setProperty('--glow-r', `${radius.toFixed(1)}px`);
    root.style.setProperty('--glow', (at.on * strength).toFixed(3));
    root.style.setProperty('--glow-tense', `${(tension * 100).toFixed(1)}%`);
    // it keeps running while the pointer is on the page, so that it can breathe
    frame = to.on || at.on > 0.005 ? requestAnimationFrame(tick) : 0;
  };
  const wake = (on: number) => {
    to.on = on;
    if (frame) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  };

  addEventListener('pointermove', (event) => {
    const dx = event.clientX - to.x;
    const dy = event.clientY - to.y;
    const step = Math.hypot(dx, dy);
    // the light appears where the pointer is, not from the corner
    if (at.on < 0.01) {
      Object.assign(at, { x: event.clientX, y: event.clientY });
      heading = null;
    } else if (step > 2) {
      const angle = Math.atan2(dy, dx);
      if (heading !== null) turned += Math.abs(Math.atan2(Math.sin(angle - heading), Math.cos(angle - heading)));
      heading = angle;
      moved += step;
    }
    to.x = event.clientX;
    to.y = event.clientY;
    link = event.target instanceof Element ? event.target.closest('a') : null;
    wake(1);
  });
  root.addEventListener('pointerleave', () => {
    link = null;
    wake(0);
  });
}
