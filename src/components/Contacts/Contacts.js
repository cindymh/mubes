import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Form, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';

import './Contacts.scss';

export default () => {
  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Contacts</title>
        <meta name="description" content="Do you have any questions? Find the answers you're looking for." />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Contacts</h1>

      <p className="lead text-center mb-4">Do you have any questions? Please do not hesitate to contact us directly.</p>
      
      <Row className="mb-5">
        <Col md={5}>
          <a href="mailto:mubes.unimelb@gmail.com" className="contacts-btn" target="_blank">
            <img
              src="img/gmail.svg"
              alt="Email us"
            />
          </a>
        </Col>
        <Col md={2} className="d-flex justify-content-center align-items-center">
          <span className="contacts-separator"></span>
        </Col>
        <Col md={5} className="d-flex justify-content-center">
          <a href="https://www.messenger.com/t/officialmubespage/" className="contacts-btn" target="_blank">
            <img
              src="img/messenger.svg"
              alt="Message us"
            />
          </a>
        </Col>
      </Row>
    </Container>
  )
}