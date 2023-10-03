import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Review({ name, bookName, comment }) {
  return (
    <Alert variant="danger">
      <Alert.Heading className="text-orange">{name}</Alert.Heading>
      <h5 className="text-danger">{bookName}</h5>
      <p className="text-dark">{comment}</p>
    </Alert>
  );
}
