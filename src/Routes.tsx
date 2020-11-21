import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {HomeScene} from "./scenes/home";
import {HistoryScene} from "./scenes/history";
import {Layout} from "./components/Layout";

export class Routes extends React.Component {

    render() {
        const routes = [
            {
                exact: true,
                path: '/',
                component: () => <HomeScene/>,
            },
            {
                exact: true,
                path: '/history',
                component: () => <HistoryScene />,
            },
            {
                path: '**',
                component: () => <div>Page not found</div>,
            },
        ];
        return (
            <Router>
                <Layout>
                    <Switch>{renderRoutes(routes)}</Switch>
                </Layout>
            </Router>
        );
    }
}
