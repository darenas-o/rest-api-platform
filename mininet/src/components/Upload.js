import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel , Col, Button  } from 'react-bootstrap';

export default class Upload extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key1: "",
      key2: "",
      key3: ""
    };
  }

  validateForm() {
    return this.state.key1.length > 0 && this.state.key2.length > 0 && this.state.key3.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.put('http://172.16.81.41:3000/api/vault-service/unseal',{key1: this.state.key1, key2: this.state.key2, key3: this.state.key3})
      .then(function (res)  {
        console.log(res.data);
        
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <h3 className="text-center">Unseal Vault</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalkey1" bsSize="large">
                  <Col componentClass={ControlLabel} sm={2}>
                    Key1
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                      placeholder="key1"
                      value={this.state.key1}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </Col> 
                </FormGroup>
                <FormGroup controlId="formHorizontalkey2" bsSize="large">
                  <Col componentClass={ControlLabel} sm={2}>
                    Key2
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                      placeholder="Key2" 
                      value={this.state.key2}
                      onChange={this.handleChange}
                      type="password"  />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalkey3" bsSize="large">
                  <Col componentClass={ControlLabel} sm={2}>
                    Key3
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                      placeholder="Key3" 
                      value={this.state.key3}
                      onChange={this.handleChange}
                      type="password"  />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Button 
                    block
                    bsSize="large"
                    type="submit"
                    className="btn btn-lg btn-info"> 
                    Unseal Vault
                  </Button>
                </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}