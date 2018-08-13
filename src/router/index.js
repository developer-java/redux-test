import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from '../components/container/UsersContainer';
import App from '../components/container/AppContainer'

export default class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/users' component={Users} />
            </Switch>
        )
    }
}