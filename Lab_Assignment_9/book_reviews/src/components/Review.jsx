import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Review({ name, bookName, comment }) {
  return (
    <Alert variant="success">
      <Alert.Heading className="text-orange">{name}</Alert.Heading>
      <h5 className="text-info">{bookName}</h5>
      <p className="text-dark">{comment}</p>
    </Alert>
  );
}
