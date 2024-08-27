import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h1>About TextUtils</h1>
          <p>TextUtils is a simple web application that provides various text processing utilities.</p>
          <p>With TextUtils, you can convert text to uppercase or lowercase, copy text to clipboard, and more.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Features</h2>
          <ul>
            <li>Convert text to uppercase or lowercase</li>
            <li>Copy text to clipboard</li>
            <li>Clear text</li>
            <li>Estimate reading time</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Why use TextUtils?</h2>
          <p>TextUtils is a convenient and easy-to-use tool that can save you time and effort when working with text.</p>
          <p>Whether you're a student, a writer, or a developer, TextUtils can help you with your text processing needs.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;