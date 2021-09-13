//import _ from 'lodash';
import { GET_CALLS, UPDATE_CUSTOMER } from "../actions/types";
import { calls } from '../data';

export default (state = calls, action) => {
    switch(action.type) {
        case GET_CALLS:
            return {...state};
        case UPDATE_CUSTOMER:
            let updatedState = Object.values(state).map(x => action.payload.Id === x.Id ? { ...x, Title: action.payload.Title} : x);
            return {...updatedState};
        default:
            return Object.values(state);
    }
}