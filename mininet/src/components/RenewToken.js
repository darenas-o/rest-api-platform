import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
//import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel , Col  } from 'react-bootstrap';

class Upload extends Component {

  state = {
    key1: '',
  };

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Renew Token</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Key1
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="key1" />
                </Col>
              </FormGroup>
            </Form>
            <button className="btn btn-lg btn-info"> Renew Token</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
