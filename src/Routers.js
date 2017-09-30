import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import Show from './Pages/Show';
import App from './Pages/App';
import List from './Pages/List';


const history = browserHistory;

const Routes = () => (
    <Router history={history}>
        <Route path="/">
            <IndexRoute component={App} />
            <Route path="show/*" >
            	<IndexRoute component={Show} />
            </Route>
            <Route path="list/*" >
            	<IndexRoute component={List} />
            </Route>
        </Route>
    </Router>
)

export default Routes;
