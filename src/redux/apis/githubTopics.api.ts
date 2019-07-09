import * as request from 'superagent';

import { Topic } from '../store/store-types';

export class GithubTopicsAPI {
    public readonly host: string = process.env.NODE_ENV==='production' ? 'https://api.github.coms/earch/topics' : 'https://api.github.com/search/topics';
    public readonly port: string = null;
    public readonly apiBaseURL: string = this.host+(this.port ? ':'+this.port : '');
    public readonly headers = {
        'Accept': 'application/vnd.github.mercy-preview+json'
    }

    searchForTopics(searchQuery: string, pageNumber: number = 1): Promise<any> {
        const requestPromise = new Promise<any>((resolve: Function, reject: Function) => {
            request
                .get(this.apiBaseURL)
                .query({
                    q: searchQuery,
                    page: pageNumber,
                    per_page: 10,
                })
                .set(this.headers)
                .end((err: request.ResponseError, res: request.Response) => {
                    if(!err) {
                        let payload: TopicsPayLoad = res.body;
                        let parsedTopics = this.parseIncommingTopics(payload.items)
                        let parsedResponse: TopicsParsedResponse = {
                            totalTopicsFound: payload.total_count,
                            topics: parsedTopics,
                        }
                        resolve(parsedResponse);
                    } else {
                        reject(err);
                    }
                });
        });
        return requestPromise;
    }

    parseIncommingTopics(incomingTopics: Array<IncomingTopic>): Array<Topic> {
        let parsedTopics: Array<Topic> = incomingTopics.map((topic, index) => {
            let parsedTopic: Topic = {
                title: topic.name,
                shortDescription: topic.short_description || 'No short description provided.',
                description: topic.description || 'No description provided.',
                releaseDate: topic.released || '',
            }
            return parsedTopic;
        })
        
        return parsedTopics;
    }
}

export interface IncomingTopic {
    name: string;
    display_name: string;
    short_description: string;
    description: string;
    created_by: string;
    released: string;
    created_at: string;
    updated_at: string;
    featured: boolean;
    curated: boolean;
    score: number;
}

export interface TopicsPayLoad {
    total_count: number;
    incomplete_results: boolean;
    items: Array<IncomingTopic>;
}

export interface TopicsParsedResponse {
    totalTopicsFound: number,
    topics:  Array<Topic>,
}
