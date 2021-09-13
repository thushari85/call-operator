import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import callsReducer from './callsReducer';

export default combineReducers({
    calls: callsReducer,
    form: formReducer
});
