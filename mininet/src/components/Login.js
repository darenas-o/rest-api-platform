import React, { Component } from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, Form, ControlLabel } from 'react-bootstrap';
import "../styles/Login.css";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://172.16.81.41:3000/api/Users/login',{email: this.state.email, password:this.state.password})
            .then(function (response) {
                console.log(response.data.id);
                localStorage.setItem('Token', response.data.id);
                alert("Logged in")
            })
            .catch(function(error) {
                console.log(error);
            })
  }

  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
