import React from "react";
import { TypeAnimation } from 'react-type-animation';

function NamePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary" id="name-page">
      <TypeAnimation
        sequence={[
          'Raffay\'s Website',
          1000,
          'Welcome!',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="font-glacial-bold text-7xl mb-4"
        repeat={Infinity}
      />
    </div>
  );
}

export default NamePage;
