export default (state = {
    items: [
        {
            id:0,
            value:"Item 1",
            link: "#1",
            isactive: true
        },
        {
            id:1,
            value:"Item 2",
            link: "#2",
            isactive: false
        },
        {
            id:2,
            value:"Item 3",
            link: "#3",
            isactive: false
        }

    ],
    oldSelection: 0
}, action) => {
    switch (action.type) {
        case 'ITEMS':
            return {...state, items: action.items}
        case 'OLD_SELECT':
            return {...state, oldSelection: action.oldSelection}
        default:
            return state;
    }
}