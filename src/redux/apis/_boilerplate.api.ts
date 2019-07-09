import * as request from 'superagent';

export class BoilerplateAPI {
    public readonly host: string = process.env.NODE_ENV==='production' ? '127.0.0.1' : '127.0.0.1';
    public readonly port: string = '3030';
    public readonly apiBaseURL: string = 'http://'+this.host+':'+this.port;

    getBoilerplateData(): Promise<any> {
        const requestPromise = new Promise<any>((resolve: Function, reject: Function) => {
            request
                .get(this.apiBaseURL+'/boilerplate')
                .end((err: request.ResponseError, res: request.Response) => {
                    if(!err) {
                        resolve(res);
                    } else {
                        reject(err);
                    }
                });
        });
        return requestPromise;
    }
}

export interface BoilerplateData {
    bar: string;
}
