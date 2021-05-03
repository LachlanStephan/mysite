import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  // Email message error
  const [emailMsg, setEmailMsg] = useState("");

  // Default state/value for inputs
  const [fName, setfName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Validation error message
  const [fNameErr, setfNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  // Validation functions
  const validatefName = () => {
    if (fName.length < 1) {
      setfNameErr("Please provide a name");
    } else {
      setfNameErr("");
    }
  };
  const validateEmail = () => {
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailErr("Please provide a valid email");
    } else {
      setEmailErr("");
    }
  };
  const validateMessage = () => {
    if (message.length < 1) {
      setMessageErr("Please provide a message");
    } else {
      setMessageErr("");
    }
  };

  // Conditionally set status of button
  const allowPost = () => {
    if (
      fName.length < 1 ||
      !email.includes("@") ||
      !email.includes(".com") ||
      message.length < 1
    ) {
      return true;
    } else {
      return false;
    }
  };

  const statusCheck = allowPost();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3athxx",
        "template_e1h4es6",
        e.target,
        "user_McluR2AIEQNtd0q0ilNGC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setEmailMsg("That's strange, your email did not go through");
        }
      );
    e.target.reset();
    setEmailMsg("Cheers!");
  }

  return (
    <div>
      <h5 id="contact">Say hi</h5>
      <form onSubmit={sendEmail}>
        <div>
          <div>
            <div>
              <div>
                <input
                  value={fName}
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                  onBlur={validatefName}
                  placeholder="Name"
                  name="fName"
                  required={true}
                />
                {fNameErr}
              </div>
            </div>
            <div>
              <div>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={validateEmail}
                  placeholder="Email"
                  name="email"
                  required={true}
                />
                {emailErr}
              </div>
            </div>
            <div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  onBlur={validateMessage}
                  placeholder="Message"
                  name="message"
                  required={true}
                />
                {messageErr}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button disabled={statusCheck} type="submit" variant="dark">
              Submit
            </button>
            <p> {emailMsg}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
