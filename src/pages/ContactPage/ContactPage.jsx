import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactPage() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Firstname:", firstname);
    console.log("Lastname:", lastname);
    console.log("Email:", email);
    console.log("Comments:", comments);
  };

  return (
    <>
    <h1>Contact Page</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="first-name">
         <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)}placeholder="ex: John" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="last-name">
         <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="ex: Doe" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="email" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ex: johndoe@email.com" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="comments" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} value={comments} onChange={(e) => setComments(e.target.value)}/>
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
