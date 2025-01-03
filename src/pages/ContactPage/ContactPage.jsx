import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactPage() {
  return (
    <>
    <h1>Contact Page</h1>
      <Form>
        <Form.Group className="mb-3">
         <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="ex: John" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
         <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="ex: Doe" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="ex: johndoe@email.com" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
