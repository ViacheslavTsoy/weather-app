import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {HomeScene} from "./scenes/home";

interface State {

}

interface Props {
}

export class Routes extends React.Component<Props, State> {

    render() {
        const routes = [
            {
                exact: true,
                path: '/',
                component: (props: any) => <HomeScene {...props}/>,
            },
            {
                exact: true,
                path: '/history',
                component: (props: any) => <div {...props}>history page</div>,
            },
            {
                path: '**',
                component: () => <div>Page not found</div>,
            },
        ];
        return (
            <Router>
                <Switch>{renderRoutes(routes)}</Switch>
            </Router>
        );
    }
}
