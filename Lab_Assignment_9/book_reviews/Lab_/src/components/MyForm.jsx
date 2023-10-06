import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Review from './Review';
import { v4 as uuidv4 } from 'uuid';
import { url, allStorage } from './utils';

export default function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [bookName, setBookName] = useState('');
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState(null);
  const [data, getData] = useState([]);
  const [books, setBooks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(bookName);
    if (!name || !email || !bookName || !comment) {
      setCheck(true);
      return;
    }
    setValue({
      name: name,
      email: email,
      bookName: bookName,
      comment: comment,
    });
    setName('');
    setEmail('');
    setBookName('');
    setComment('');
  };

  useEffect(() => {
    if (value) {
      const string = JSON.stringify(value);
      localStorage.setItem(uuidv4(), string);
    }
    const res = allStorage();
    if (res.length >= 0) {
      getData(res);
    }
  }, [value]);

  //making request on initial page load
  useEffect(() => {
    async function makeRequest() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBooks(data);
    }
    makeRequest();
  }, []);

  return (
    <div className="d-flex flex-row justify-content-evenly">
      <div className="w-50">
        <h3 className="text-center">Book reviews</h3>
        {data.length > 0 ? (
          data.map((review) => (
            <Review
              key={uuidv4()}
              name={JSON.parse(review).name}
              bookName={JSON.parse(review).bookName}
              comment={JSON.parse(review).comment}
            />
          ))
        ) : (
          <Alert variant="dark">no reviews</Alert>
        )}
      </div>
      <div className="w-40">
        <h3 className="text-center">Write a Review</h3>
        {check && <Alert variant="warning">All fields are required</Alert>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              name="email"
              value={email}
            />
          </Form.Group>
          <Form.Select
            name="selectedBook"
            onChange={(e) => setBookName(e.target.value)}
            value={bookName}
            mode="multiple"
            aria-label="Default select example"
          >
            <option>choose a book</option>
            {books.length > 0 &&
              books.map((book) => (
                <option key={uuidv4()} value={book.title}>
                  {book.title}
                </option>
              ))}
          </Form.Select>
          <Form.Group
            className="mb-3 mt-2"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Review on the book</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </Form.Group>
          <Button className="w-100" type="submit" variant="dark">
            submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
