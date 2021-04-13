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
  icon12?: IconBaseProps;
  icon13?: IconBaseProps;
  icon14?: IconBaseProps;
  icon15?: IconBaseProps;
  icon16?: IconBaseProps;
  icon17?: IconBaseProps;
  icon18?: IconBaseProps;
  icon19?: IconBaseProps;
}

// CSS for container
const skillsStyle: CSS.Properties = {
  padding: "1.5em",
};

// CSS for icon size
const iconStyle: CSS.Properties = {
  fontSize: "2em",
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
  icon12,
  icon13,
  icon14,
  icon15,
  icon16,
  icon17,
  icon18,
  icon19,
}) => {
  return (
    <Container id="skills" style={skillsStyle}>
      {/* current skills */}
      <h5>{title1}</h5>
      <Row style={iconStyle}>
        <Col>{icon1}</Col>
        <Col>{icon2}</Col>
        <Col>{icon3}</Col>
        <Col>{icon4}</Col>
        <Col>{icon5}</Col>
      </Row>
      <Row style={iconStyle}>
        <Col>{icon6}</Col>
        <Col>{icon7}</Col>
        <Col>{icon8}</Col>
        <Col>{icon9}</Col>
        <Col>{icon10}</Col>
      </Row>
      <Row style={iconStyle}>
        <Col>{icon11}</Col>
        <Col>{icon12}</Col>
        <Col>{icon13}</Col>
        <Col>{icon14}</Col>
        <Col>{icon15}</Col>
      </Row>
      {/* desired skills */}
      <h5 style={{ paddingTop: "2em" }}>{title2}</h5>
      <Row style={iconStyle}>
        <Col>{icon16}</Col>
        <Col>{icon17}</Col>
        <Col>{icon18}</Col>
        <Col>{icon19}</Col>
        <Col>{""}</Col>
      </Row>
    </Container>
  );
};

export default Skills;
