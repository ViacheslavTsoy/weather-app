import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

interface State {

}

interface Props {
}

export class Routes extends React.Component<Props, State> {

    componentDidMount() {

    }



    render() {
        const routes = [
            {
                exact: true,
                path: '/',
                component: (props: any) => <div {...props}>weather page</div>,
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
