// React
import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//
// import { AppState } from '../redux/store/store-types';
import { Store } from 'redux';

//App Components
import Header from '../components/Header';

// App Screens
import CommentsListScreen from '../screens/TopicsListScreen/TopicsListScreen';

interface AppRouterProps {
    store: Store;
}

const AppRouter = (props: AppRouterProps): React.ReactElement => {
    
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={CommentsListScreen} />
                <Route path='/404' component={() => (<div>NotFound</div>)} />
                <Redirect from='*' to='/404' /> 
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;
