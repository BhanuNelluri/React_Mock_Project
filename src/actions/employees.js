import * as api from '../api';

export const employyeData = () =>async (dispatch) => {
    try {
        const {data} = await api.fetchUsers();
        dispatch({ type: 'CREATE', payload:data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
