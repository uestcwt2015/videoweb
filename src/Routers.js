import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';

import App from './Pages/App';


const history = browserHistory;

const Routes = () => (
    <Router history={history}>
        <Route path="/">
            <IndexRoute component={App} />
        </Route>
    </Router>
)

export default Routes;
