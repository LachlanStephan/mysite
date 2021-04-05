import React from "react";
import { Card } from "react-bootstrap";
import { IconBaseProps } from "react-icons";

// Declare props
interface Props {
  cardImg?: string | undefined;
  cardTitle?: string;
  cardText?: string;
  hrefText?: string;
  icon?: IconBaseProps;
}

// Parse props
const CardProp: React.FC<Props> = ({
  cardImg,
  cardTitle,
  cardText,
  hrefText,
  icon,
}) => {
  return (
    <Card
      style={{
        width: "18rem",
        border: "none",
        borderLeft: "4px solid rgb(240, 118, 118)",
        marginBottom: "1em",
      }}
    >
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <div style={{ fontSize: "1.5em" }}>
          <a className="iconLinks" href={hrefText}>
            {icon}
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProp;
