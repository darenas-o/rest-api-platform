import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
//import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';

class Display extends Component{

    state = {services: []};

    getServices(){
        axios.get('http://172.16.81.41:3000/api/services')
            .then(res =>  {
                console.log(res.data);
                this.setState({ services: res.data })
            })
    }

    componentDidMount(){
        this.getServices();
    }

    render() {
        const {services} = this.state;
        
        return (
            <div>
                <Nav />
                <h3 className="text-center"> Vault Service </h3>
                <hr/>
                <div className="col-sm-12">
                { services.map((data, index) => (
                    <div className="col-sm-4" key={index} >
                    <div className="embed-responsive embed-responsive-4by3">
                        <h4>{data.name}</h4>
                        <div>{data.description}</div>
                        <div>{data.description}</div>
                    </div>
                    
                </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Display;