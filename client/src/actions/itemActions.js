import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading);

    axios.get('/api/items')
        .then(res => dispatch({
            type: 'GET_ITEMS',
            payload: res.data
        }));
};

// export const addItem = (item) => dispatch => {
//     return {
//         type: 'ADD_ITEM',
//         payload: item
//     }
// }

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item)
        .then(res => dispatch({
            type: 'ADD_ITEM',
            payload: res.data
        }));
}

// export const deleteItem = (id) => {
//     return {
//         type: 'DELETE_ITEM',
//         payload: id
//     };
// };

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: 'DELETE_ITEM',
            payload: id
        }))
};

export const setItemsLoading = () => {
    return {
        type: 'DELETE_ITEM'
    };
};