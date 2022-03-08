import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ elmp, handelclick }) => {
  //   console.log(elmp);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={elmp.imgSrc} />
        <Card.Body>
          <Card.Title>{elmp.name}</Card.Title>
          <Card.Text>{elmp.price}</Card.Text>
          <Button onClick={() => handelclick(elmp.name)} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
