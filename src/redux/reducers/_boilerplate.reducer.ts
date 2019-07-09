import {
    // First import action types used by the new reducer
    BOILERPLATE_ACTION_TYPE
} from '../actions/_boilerplate.actions'
import {
    // To keep things tight and structured, import Action Interfaces separately
    BoilerplateAction,
} from '../actions/_boilerplate.actions'
import { BoilerplateState } from '../store/store-types'

const initialState: BoilerplateState = {
    foo: '',
}

export default (state = initialState, action: BoilerplateAction) => {
    switch(action.type) {
        case BOILERPLATE_ACTION_TYPE : {
            let newState: BoilerplateState = {
                foo: action.foo,
            }
            return {...state, ...newState}
        }
        default : {
            return {...state}
        }
    }
}