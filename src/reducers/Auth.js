import { AUTH } from "../constants/ActionTypes";

const initialState = {
    name:"",
    email:""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
               ...state,
               name:action.payload.name,
               email:action.payload.email
            };
        default:
            return state;
    }

}
