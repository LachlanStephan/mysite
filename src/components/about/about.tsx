import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";

// Declare props
interface Props {
  aboutText: string;
}

// CSS for container
const aboutTextStyle: CSS.Properties = {
  padding: "1.5em",
  textAlign: "left",
};

const About: React.FC<Props> = ({ aboutText }) => {
  return (
    <Container id="about" style={aboutTextStyle}>
      <Row>
        <Col>{aboutText}</Col>
      </Row>
    </Container>
  );
};

export default About;
