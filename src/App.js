import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DesicionApp from './DesicionApp';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={DesicionApp} />
                </Switch>
            </Router>
        )
    }
}
