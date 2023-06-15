import { AUTH } from '../constants/ActionTypes';

export const signin = (data,) =>async (dispatch) => {
    try {
        console.log(data);
        dispatch({ type: AUTH, payload:data });
    } catch (error) {
        console.log(error);
    }
}


