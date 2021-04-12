import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";

// Declare props
interface Props {
  aboutText: string;
  aboutText2: string;
  aboutText3: string;
}

// CSS for container
const aboutTextStyle: CSS.Properties = {
  padding: "1.5em",
  textAlign: "left",
};

const About: React.FC<Props> = ({ aboutText, aboutText2, aboutText3 }) => {
  return (
    <Container id="about" style={aboutTextStyle}>
      <Row>
        <Col>{aboutText}</Col>
      </Row>
      <Row style={{ paddingTop: "1em" }}>
        <Col>{aboutText2}</Col>
      </Row>
      <Row style={{ paddingTop: "1em" }}>
        <Col>{aboutText3}</Col>
      </Row>
    </Container>
  );
};

export default About;
