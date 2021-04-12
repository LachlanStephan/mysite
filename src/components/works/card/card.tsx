import React from "react";
import { Card } from "react-bootstrap";
import { IconBaseProps } from "react-icons";

// Declare props
interface Props {
  cardImg?: HTMLImageElement | HTMLElement | any;
  cardTitle?: string;
  cardText?: string;
  tech?: IconBaseProps;
  tech1?: IconBaseProps;
  tech2?: IconBaseProps;
  tech3?: IconBaseProps;
  tech4?: IconBaseProps;
  tech5?: IconBaseProps;
  hrefText?: string;
  icon?: IconBaseProps;
}

// Parse props
const CardProp: React.FC<Props> = ({
  cardImg,
  cardTitle,
  cardText,
  tech,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  hrefText,
  icon,
}) => {
  return (
    <Card
      style={{
        width: "auto",
        border: "none",
        borderLeft: "2px solid rgb(240, 118, 118)",
        marginBottom: "1em",
      }}
    >
      <Card.Img src={cardImg} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <p style={{ fontSize: "1.5em", padding: "0.2em" }}>
          {tech}
          {tech1}
          {tech2}
          {tech3}
          {tech4}
          {tech5}
        </p>
        <div style={{ fontSize: "1.5em" }}>
          <a target="blank" className="iconLinks" href={hrefText}>
            {icon}
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProp;
