import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CSS from "csstype";

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
      <Row>
        <Col>
          <h3>{title}</h3>
        </Col>
      </Row>
      <Row style={navStyle}>
        <Col>
          <a className="navLinks" href="#header">
            {link1}
          </a>
        </Col>
        <Col>
          <a className="navLinks" href="#works">
            {link2}
          </a>
        </Col>
        <Col>
          <a className="navLinks" href="#skills">
            {link3}
          </a>
        </Col>
        <Col>
          <a className="navLinks" href="#contact">
            {link4}
          </a>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Header;
