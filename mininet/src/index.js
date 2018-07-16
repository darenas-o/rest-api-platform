import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './components/Upload';
import Display from './components/Display';
import RenewToken from './components/RenewToken';
import Login from './components/Login'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
//import { requireAuth } from './utils/AuthService';
import './index.css';

const Root = () => {
    return (
        <div className="container">
            <Router history={browserHistory}>
                <Route path="/" component={Display}/>
                <Route path="/login" component={Login}/>
                <Route path="/unseal" component={Upload}/>
                <Route path="/renew-token" component={RenewToken} />
            </Router>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
