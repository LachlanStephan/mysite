import { Container, Row, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const contactStyle = {
    padding: "1.5em",
  };

  const inputSpacing = {
    marginTop: "0.5em",
  };

  const inputStyle = {
    border: "1px solid gray",
    boxShadow: "1px gray",
    borderRadius: "5px",
    padding: "5px",
    width: "100%",
  };

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
    <Container style={contactStyle}>
      <h4 id="contact" style={{ paddingBottom: "0.5em" }}>
        Contact
      </h4>
      <form onSubmit={sendEmail}>
        <Row>
          <Col>Some text</Col>
        </Row>
        <Row>
          <Col>
            <Row style={inputSpacing}>
              <Col>
                <input
                  style={inputStyle}
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
              </Col>
            </Row>
            <Row style={inputSpacing}>
              <Col>
                <input
                  style={inputStyle}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={validateEmail}
                  placeholder="email"
                  name="email"
                  required={true}
                />
                {emailErr}
              </Col>
            </Row>
            <Row style={inputSpacing}>
              <Col>
                <textarea
                  style={inputStyle}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  onBlur={validateMessage}
                  placeholder="message"
                  name="message"
                  required={true}
                />
                {messageErr}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={inputSpacing}>
          <Col>
            <Button
              disabled={statusCheck}
              style={inputStyle}
              type="submit"
              variant="dark"
            >
              Submit
            </Button>
            <p style={{ marginTop: "0.5em" }}>{emailMsg}</p>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Contact;
