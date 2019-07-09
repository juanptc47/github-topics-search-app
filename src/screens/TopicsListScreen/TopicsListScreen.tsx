 // React
 import * as React from 'react';
 import { RouteComponentProps, } from 'react-router-dom';

 // Styles
import { AppStyles } from '../../AppStyles';
import { styles as ScreenStyles } from './TopicsListStyles';

// Redux
import { connect } from 'react-redux';
import { AppState, Topic, TopicsState } from '../../redux/store/store-types';
import { readTopicsListSearch, readMoreTopics } from '../../redux/actions/topics.actions';

// Semantic UI Components
import {
    Input,
    Icon,
    Card,
    Modal,
    Header,
} from 'semantic-ui-react';

// Third-party Components
import * as InfiniteScroll from 'react-infinite-scroller';

interface TopicsListScreenProps extends RouteComponentProps {
    readTopicsListSearch: Function;
    readMoreTopics: Function;
    topicsData: TopicsState;
};
interface TopicsListScreenState { 
    searchInputString: string;
    selectedTopic: Topic;
    topicDetailsModalIsOpen: boolean;
 };

class TopicsListScreen extends React.Component<TopicsListScreenProps, TopicsListScreenState> {

    state: TopicsListScreenState = {
        searchInputString: '',
        selectedTopic: null,
        topicDetailsModalIsOpen: false,
    }

    _handleSearchRequest = () => {
        if(this.state.searchInputString.length>0) {
            this.props.readTopicsListSearch(this.state.searchInputString);
        }
    }

    _handleTopicCardClick = (selectedTopic: Topic) => {
        this.setState({
            selectedTopic: selectedTopic,
            topicDetailsModalIsOpen: true,
        })
    }

    _handleInfiniteScrollLoadMore = () => {
        this.props.readMoreTopics()
    }

    render() {

        const topicsStatus = this.props.topicsData.topicsListStatus;
        const topicsList = this.props.topicsData.topicsList;
        const totalTopicsFound = this.props.topicsData.totalTopicsFound;
        const topicsListIsFull = this.props.topicsData.listIsFull;

        return (
            <div style={AppStyles.screenDefaultWrapper}>
                <div style={ScreenStyles.screenContainer}>
                    <h1>Github Topics Search</h1>
                    <div>
                        <Input
                            icon={{name: 'search', link: true, onClick: ()=>this._handleSearchRequest() }}
                            placeholder='Enter keywords to find topics'
                            fluid={true}
                            onChange={(e)=>this.setState({searchInputString: e.currentTarget.value})}
                            onKeyPress={(e: KeyboardEvent) => e.charCode===13?this._handleSearchRequest():null}
                        />
                        {topicsStatus === 'SUCCESS' &&
                            <div style={ScreenStyles.searchCountContainer}>
                                Showing {topicsList.length} of {totalTopicsFound} topics found
                            </div>
                        }
                    </div>

                    {topicsStatus === 'IDLE' &&
                        <div style={ScreenStyles.idleMessageContainer}>
                            Try searching for "Javascript", "mobile aplications" or other key words that could relate to topics of your interest. Results found will be displayed here.
                        </div>
                    }

                    {topicsStatus === 'FAILED' &&
                        <div style={ScreenStyles.errorMessageContainer}>
                            Something went wrong while executing your search. Please try again later.
                        </div>
                    }

                    {topicsStatus === 'SUCCESS' &&
                        <div style={ScreenStyles.topicsResultContainer}>
                            <InfiniteScroll
                                loadMore={this._handleInfiniteScrollLoadMore}
                                loader={<div key='loader' style={{textAlign: 'center'}}><Icon name='spinner' loading /></div>}
                                useWindow={true}
                                hasMore={!topicsListIsFull}
                            >
                                {topicsList.map((topic, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            header={topic.title}
                                            description={topic.shortDescription}
                                            meta={topic.releaseDate ? ('Released on '+topic.releaseDate) : 'No release date found'}
                                            fluid={true}
                                            link={true}
                                            onClick={()=>this._handleTopicCardClick(topic)}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </div>
                    }

                </div>
                {topicsStatus === 'PENDING' &&
                    <div style={AppStyles.loaderLightOverlayContainer}>
                        <Icon name='spinner' loading={true} size='large' color='black' />
                    </div>
                }

                <Modal open={this.state.topicDetailsModalIsOpen} onClose={()=>this.setState({topicDetailsModalIsOpen: false})} closeIcon={true}>
                    <Modal.Header>Topic Details</Modal.Header>
                    {this.state.selectedTopic &&
                        <Modal.Content>
                            <Modal.Description>
                                <Header>{this.state.selectedTopic.title}</Header>
                                <p>{this.state.selectedTopic.description}</p>
                            </Modal.Description>
                        </Modal.Content>
                    }
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        topicsData: state.topicsState,
    }
}

const mapDispatchToProps = {
    readTopicsListSearch,
    readMoreTopics,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsListScreen);