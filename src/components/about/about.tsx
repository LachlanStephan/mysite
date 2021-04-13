import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Col>{aboutText}</Col>
        </motion.div>
      </Row>
      <Row style={{ paddingTop: "1em" }}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <Col>{aboutText2}</Col>
        </motion.div>
      </Row>
      <Row style={{ paddingTop: "1em" }}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
        >
          <Col>{aboutText3}</Col>
        </motion.div>
      </Row>
    </Container>
  );
};

export default About;
