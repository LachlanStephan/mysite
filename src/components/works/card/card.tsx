import React from "react";
import { Card } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { motion } from "framer-motion";

// Declare props
interface Props {
  cardImg?: HTMLImageElement | HTMLElement | any;
  alt: string;
  cardTitle?: string;
  cardText?: string;
  tech?: IconBaseProps;
  tech1?: IconBaseProps;
  tech2?: IconBaseProps;
  tech3?: IconBaseProps;
  tech4?: IconBaseProps;
  tech5?: IconBaseProps;
  tech6?: IconBaseProps;
  hrefText?: string;
  icon?: IconBaseProps;
}

// Parse props
const CardProp: React.FC<Props> = ({
  cardImg,
  alt,
  cardTitle,
  cardText,
  tech,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  hrefText,
  icon,
}) => {
  return (
    <Card
      style={{
        width: "auto",
        height: "auto",
        border: "none",
        borderLeft: "1px solid rgb(240, 118, 118)",
        paddingBottom: "2em",
      }}
    >
      <Card.Img src={cardImg} alt={alt} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <p style={{ fontSize: "2em", padding: "0.2em" }}>
          {tech}
          {tech1}
          {tech2}
          {tech3}
          {tech4}
          {tech5}
        </p>
        <motion.div
          initial={{
            scale: 1,
            x: 0,
            y: 0,
            z: 0,
          }}
          whileHover={{
            rotate: -10,
            scale: 1.1,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{ fontSize: "2em", height: "0", width: "0" }}
        >
          <a target="blank" className="iconLinks" href={hrefText}>
            {icon}
          </a>
        </motion.div>
      </Card.Body>
    </Card>
  );
};

export default CardProp;
