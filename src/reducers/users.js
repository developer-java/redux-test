export default (state = {
    collection: [],
    model: {}
}, action) => {
    switch (action.type) {
        case 'LIST_USERS': 
            return {...state, collection: action.collection}
        case 'FETCH_USER':
            return {...state, model: action.model}
        default:
            return state;
    }
}