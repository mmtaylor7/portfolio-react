import { Routes, Route, Link } from "react-router-dom";
import "./Contact.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SimpleForm extends Component {
  render() {
    return (
      <Container>
        <div className="contact-me">Contact Me</div>
        <Form className="form-bg">
          <Form.Group controlId="form.Name">
            <Form.Label className="form-titles">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              className="input-size"
            />
          </Form.Group>
          <Form.Group controlId="form.Email">
            <Form.Label className="form-titles">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="input-size"
            />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label className="form-titles">Message</Form.Label>
            <Form.Control as="textarea" rows={2} className="msg-font-size" />
          </Form.Group>
        </Form>
        <div className="d-grid gap-2 button-flex">
          <Button className="submit-button" size="lg">
            Send Message
          </Button>
        </div>
      </Container>
    );
  }
}

export default SimpleForm;
