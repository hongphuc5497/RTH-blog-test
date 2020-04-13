import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/auth";
import API from "../utils/API";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuth();

  function handleLogin(e) {
    e.preventDefault();

    API.post('/users/sign_in', {
      "auth": {
        email,
        password
      }
    }).then(res => {
      if (res.status === 201) {
        setAuthToken(res.data.jwt);
        toast.success('Success login');
        props.history.push("/");
      } else {
        toast.error('Email or password provided were incorrect!');
      }
    }).catch(err => {
      toast.error('Email or password provided were incorrect!');
    })
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Login</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <Link to="/register">
                      <Button type="submit" color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Login);
