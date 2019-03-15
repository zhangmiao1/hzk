import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route

} from 'react-router-dom'
import Login from './components/login/login';
import Home from './components/home/home';

class HzkRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/home' component={Home}/>
                        <Redirect to='/login'/>
                    </Switch>


                </div>
            </Router>
        )
    }
}
export default HzkRouter