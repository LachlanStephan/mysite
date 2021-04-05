import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";
import CardProp from "./card/card";
import { FaGithub } from "react-icons/fa";

// CSS for container
const worksStyle: CSS.Properties = {
  textAlign: "left",
  padding: "1.5em",
};

// GitHub icon
const ghub = <FaGithub />;

const Works: React.FC = () => {
  return (
    <Container id="works" style={worksStyle}>
      <Row>
        <Col>
          <CardProp
            cardTitle="something"
            cardText="some text"
            hrefText=""
            icon={ghub}
          />
        </Col>
        <Col>
          <CardProp
            cardTitle="something"
            cardText="some text"
            hrefText=""
            icon={ghub}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Works;
