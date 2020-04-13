import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { toast } from "react-toastify";
import API from "../utils/API";
import { withRouter } from 'react-router-dom';

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (password !== passwordRepeat) {
      toast.error("Password is not the same");
    } else {
      API.post('/api/v1/users', {
        name,
        email,
        password
      }).then(res => {
        if (res.status === 200) {
          toast.success('Success register');
          props.history.push("/login");
        } else {
          toast.error('Email or password provided were incorrect!');
        }
      }).catch(err => {
        toast.error('Email or password provided were incorrect!');
      })
    }
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={handleRegister}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Name"
                      autoComplete="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Password" autoComplete="new-password"
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Repeat password" autoComplete="new-password"
                      required
                      value={passwordRepeat}
                      onChange={e => setPasswordRepeat(e.target.value)}
                    />
                  </InputGroup>
                  <Button type="submit" color="success" block>Create Account</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Register);
