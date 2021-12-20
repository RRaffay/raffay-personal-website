import React from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import "./styles/reachMePageStyle.css";

function ReachMePage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4lqdjqh",
        "template_fshjiyd",
        e.target,
        "user_uBuqnrXsIfeBtcbNRmIeK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="ReachMePage" id="reach-me-page">
      <Container>
        <h1 className="ReachMePage-header">Reach Me!</h1>
        <div class="form-group pink-border-focus">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              className="form-control-name"
              placeholder="Name?"
              name="name"
            ></input>
            <br /> <br />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea5"
              rows="7"
              placeholder="Leave your message here!"
              name="message"
            ></textarea>
            <br></br>
            <input type="submit" className="sendButton" value="SEND"></input>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ReachMePage;
