// Redux
import { createStore, applyMiddleware } from 'redux';
// Middleware
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// Reducer
import rootReducer from '../reducers';
// State Types
import { AppState } from './store-types';

export const createCustomStore = (initialState?: any) => {
    return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk, ReduxLogger))
}
