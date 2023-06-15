import { AUTH } from "../constants/ActionTypes";


export default (state = {employees:[]}, action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                employees: action.payload.data,
            };
               
        default:
            return state;
    }

}
