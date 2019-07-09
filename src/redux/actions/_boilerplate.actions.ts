// Redux Types
import { Dispatch, ActionCreator, Action } from 'redux';
import { AppState } from '../store/store-types';

/*
* Action Types
*/
export const BOILERPLATE_ACTION_TYPE = 'BOILERPLATE_ACTION_TYPE';

/*
* Asynchronous Action Creators (with redux-thunks)
* First word of every function sould be an element from the CRUD verbs
* according to the nature of the action to performe
* (create [POST data], read [GET data], update [PUT data], delete [DELETE data])
*/
export const boilerplateThunkAction = () => {
    return (dispatch: Dispatch, getState: Function) => {
        const appState: AppState = getState();
        setTimeout(() => {
            dispatch(boilerPlateAction(appState.boilerPlateState));
        }, 3000)
    }
}

/*
* Actions Interfaces
*/
export interface BoilerplateAction extends Action {
    foo?: string,
}

/*
* Synchronous Action Creators
*/
export const boilerPlateAction: ActionCreator<Action> = (foo: any) => {
    const action: BoilerplateAction = {
        type: BOILERPLATE_ACTION_TYPE,
        foo: 'var'
    };
    return action;
}
