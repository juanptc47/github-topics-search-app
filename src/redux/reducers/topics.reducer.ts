import {
    // First import action types used by the new reducer
    TOPICS_SET_LIST
} from '../actions/topics.actions'
import {
    // To keep things tight and structured, import Action Interfaces separately
    TopicsAction,
} from '../actions/topics.actions'
import { TopicsState } from '../store/store-types'

const initialState: TopicsState = {
    listIsFull: false,
    pagesLoaded: 0,
    topicsList: [],
    topicsListStatus: 'IDLE',
    fetchingMoreTopics: false,
    totalTopicsFound: 0,
    querySearchString: '',
}

export default (state = initialState, action: TopicsAction) => {
    switch(action.type) {
        case TOPICS_SET_LIST : {
            let newState: TopicsState = {
                topicsListStatus: action.topicsListStatus,
                topicsList: action.topicsList || state.topicsList,
                listIsFull: action.listIsFull === undefined ? state.listIsFull : action.listIsFull,
                pagesLoaded: action.pagesLoaded || state.pagesLoaded,
                totalTopicsFound: action.totalTopicsFound || state.totalTopicsFound,
                fetchingMoreTopics: state.fetchingMoreTopics,
                querySearchString: action.querySearchString || state.querySearchString,
            }
            return {...state, ...newState}
        }
        default : {
            return {...state}
        }
    }
}