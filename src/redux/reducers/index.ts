// Redux imports
import { combineReducers } from 'redux';

// Reducers
import TopicsReducer from './topics.reducer';

export default combineReducers({
    topicsState: TopicsReducer,
});