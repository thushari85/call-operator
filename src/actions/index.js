import { UPDATE_CUSTOMER, GET_CALL, GET_CALLS } from "./types";
import { calls } from '../data';

export const getCalls = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_CALLS,
            payload: calls
        })
    }
};

export const getCall = (callId) => {
    return async (dispatch) => {
        dispatch({
            type: GET_CALL,
            payload: callId
        });
    }
};

export const editCustomer = (formValues)  => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_CUSTOMER,
            payload: formValues
        });
    }
};