import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";
import { IconBaseProps } from "react-icons";

// Declare props
interface Props {
  title1?: string;
  title2?: string;
  icon1?: IconBaseProps;
  icon2?: IconBaseProps;
  icon3?: IconBaseProps;
  icon4?: IconBaseProps;
  icon5?: IconBaseProps;
  icon6?: IconBaseProps;
  icon7?: IconBaseProps;
  icon8?: IconBaseProps;
  icon9?: IconBaseProps;
  icon10?: IconBaseProps;
  icon11?: IconBaseProps;
}

// CSS for container
const skillsStyle: CSS.Properties = {
  padding: "1.5em",
  textAlign: "left",
};

// CSS for icon size
const iconStyle: CSS.Properties = {
  fontSize: "2.2em",
};

// Parse props
const Skills: React.FC<Props> = ({
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  title1,
  title2,
}) => {
  return (
    <Container style={skillsStyle}>
      <h6>{title1}</h6>
      <Row>
        <Col style={iconStyle}>{icon1}</Col>
        <Col style={iconStyle}>{icon2}</Col>
        <Col style={iconStyle}>{icon3}</Col>
      </Row>
      <Row>
        <Col style={iconStyle}>{icon4}</Col>
        <Col style={iconStyle}>{icon5}</Col>
        <Col style={iconStyle}>{icon6}</Col>
      </Row>
      <Row>
        <Col style={iconStyle}>{icon7}</Col>
        <Col style={iconStyle}>{icon8}</Col>
        <Col style={iconStyle}>{icon9}</Col>
      </Row>
      <Row>
        <Col style={iconStyle}>{icon10}</Col>
        <Col style={iconStyle}>{icon11}</Col>
        <Col style={iconStyle}>{}</Col>
      </Row>
      <h6 style={{ paddingTop: "2em" }}>{title2}</h6>
      <Row>
        <Col style={iconStyle}>{}</Col>
        <Col style={iconStyle}>{}</Col>
        <Col style={iconStyle}>{}</Col>
      </Row>
      <Row>
        <Col style={iconStyle}>{}</Col>
        <Col style={iconStyle}>{}</Col>
        <Col style={iconStyle}>{}</Col>
      </Row>
    </Container>
  );
};

export default Skills;
