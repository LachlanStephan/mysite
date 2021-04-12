import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";
import { IconBaseProps } from "react-icons";

const footerStyle: CSS.Properties = {
  padding: "1.5em",
  color: "gray",
};

interface Props {
  footerLink1: IconBaseProps;
}

const Footer: React.FC<Props> = ({ footerLink1 }) => {
  return (
    <Container style={footerStyle}>
      <Row>
        <Col>
          GitHub {""}
          <a
            target="blank"
            className="footerLink"
            style={{ fontSize: "1.5em", paddingLeft: "0.2em" }}
            href="https://github.com/LachlanStephan"
          >
            {footerLink1}
          </a>
        </Col>
      </Row>{" "}
      <Row>
        <Col>
          Email - {""}
          <a className="footerLink" href="mailto:ljstephan116@gmail.com">
            ljstephan116@gmail.com
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
