import { Container, Row, Col } from "react-bootstrap";
import CSS from "csstype";
import { IconBaseProps } from "react-icons";
import { motion } from "framer-motion";

const footerStyle: CSS.Properties = {
  padding: "1.5em",
  color: "gray",
};

const iconSize = {
  fontSize: "1.5em",
};

interface Props {
  footerLink1: IconBaseProps;
  footerLink2: IconBaseProps;
}

const Footer: React.FC<Props> = ({ footerLink1, footerLink2 }) => {
  return (
    <Container style={footerStyle}>
      <Row>
        <Col style={iconSize}>
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
              duration: 0.2,
            }}
          >
            <p>
              <a
                target="blank"
                className="footerLink"
                href="https://github.com/LachlanStephan"
              >
                Github {""}
                {footerLink1}
              </a>
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col style={iconSize}>
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
              duration: 0.2,
            }}
          >
            <p>
              <a className="footerLink" href="mailto:ljstephan116@gmail.com">
                Email
                {footerLink2}
              </a>
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
