import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CSS from "csstype";
import { motion } from "framer-motion";

// Declare props
interface Props {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

// CSS for container
const headerStyle: CSS.Properties = {
  textAlign: "left",
  padding: "1.5em",
};

// CSS for links
const navStyle: CSS.Properties = {
  paddingTop: "1.5em",
};

const Header: React.FC<Props> = ({ title, link1, link2, link3, link4 }) => {
  return (
    <Container id="header" style={headerStyle}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Row>
          <Col>
            <h3>{title}</h3>
          </Col>
        </Row>
        <Row style={navStyle}>
          <Col>
            <motion.div
              initial={{
                scale: 1,
                x: 0,
                y: 0,
                z: 0,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <a className="navLinks" href="#header">
                {link1}
              </a>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <a className="navLinks" href="#works">
                {link2}
              </a>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{
                scale: 1,
                x: 0,
                y: 0,
                z: 0,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <a className="navLinks" href="#skills">
                {link3}
              </a>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{
                scale: 1,
                x: 0,
                y: 0,
                z: 0,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <a className="navLinks" href="#contact">
                {link4}
              </a>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Header;
