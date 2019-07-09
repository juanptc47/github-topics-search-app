// Redux Types
import { Dispatch, ActionCreator, Action } from 'redux';
import { AppState, TopicsState, Topic, StatusOption } from '../store/store-types';

// Remote data APIs
import { GithubTopicsAPI, TopicsParsedResponse } from '../apis/githubTopics.api';

/*
* Action Types
*/
export const TOPICS_SET_LIST = 'TOPICS_SET_LIST';

/*
* Asynchronous Action Creators (with redux-thunks)
* First word of every function sould be an element from the CRUD verbs
* according to the nature of the action to performe
* (create [POST data], read [GET data], update [PUT data], delete [DELETE data])
*/
export const readTopicsListSearch = (searchQuery: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        const githubTopicsAPI = new GithubTopicsAPI();
        dispatch(setTopicsList('PENDING', searchQuery));
        githubTopicsAPI.searchForTopics(searchQuery)
            .then((res: TopicsParsedResponse) => {
                let listIsFull = res.totalTopicsFound <= res.topics.length
                dispatch(setTopicsList('SUCCESS', searchQuery, res.topics, listIsFull, 1, res.totalTopicsFound));
            })
            .catch((err) => {
                dispatch(setTopicsList('FAILED', searchQuery));
            })
    }
}

export const readMoreTopics = () => {
    return (dispatch: Dispatch, getState: Function) => {
        const currentAppState: AppState = getState();
        const currentSearchQuery = currentAppState.topicsState.querySearchString;
        const currentSearchPage = currentAppState.topicsState.pagesLoaded;
        const githubTopicsAPI = new GithubTopicsAPI();
        githubTopicsAPI.searchForTopics(currentSearchQuery, currentSearchPage+1)
            .then((res: TopicsParsedResponse) => {
                const currentTopicsList = currentAppState.topicsState.topicsList;
                const newTopicsList = [...currentTopicsList, ...res.topics];
                const listIsFull = res.totalTopicsFound <= newTopicsList.length;
                dispatch(setTopicsList('SUCCESS', currentSearchQuery, newTopicsList, listIsFull, currentSearchPage+1))
            })
            .catch((err) => {
                dispatch(setTopicsList('FAILED', currentSearchQuery));
            })
    }
}

/*
* Actions Interfaces
*/
export interface TopicsAction extends Action, TopicsState {};

/*
* Synchronous Action Creators
*/
export const setTopicsList = (status: StatusOption, querySearchString: string, topicsList?: Array<Topic>, listIsFull?: boolean, pagesLoaded?: number, totalTopicsFound?: number) => {
    const action: TopicsAction = {
        type: TOPICS_SET_LIST,
        listIsFull: listIsFull,
        pagesLoaded: pagesLoaded,
        topicsList: topicsList,
        topicsListStatus: status,
        totalTopicsFound: totalTopicsFound,
        fetchingMoreTopics: undefined,
        querySearchString: querySearchString,
    };
    return action;
}
