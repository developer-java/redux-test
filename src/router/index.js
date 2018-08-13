import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from '../components/users/container';

export default class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Users} />
            </Switch>
        )
    }
}