
// _boilerplate.reducer
export interface BoilerplateState {
    foo?: string,
}

// topics.reducer
export interface Topic {
    title: string;
    shortDescription: string;
    description: string;
    releaseDate: string;
}
export interface TopicsState {
    topicsListStatus: StatusOption;
    topicsList: Array<Topic>;
    pagesLoaded: number;
    listIsFull: boolean;
    fetchingMoreTopics: boolean;
    totalTopicsFound: number;
    querySearchString: string;
}

export type StatusOption = 'IDLE' | 'PENDING' | 'SUCCESS' | 'FAILED';

export type AppState = {
    // boilerPlateState: BoilerplateState;
    topicsState: TopicsState;
}
