import { TYPES } from '../actions/dropdown'


export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.ADD_DROPDOWN:
            return {
                ...state,
                [action.data.id]: {selected: {}}
            }
        case TYPES.SELECT_ELEMENT:
            return {
                ...state,
                [action.data.id]: {selected: {
                    ...state[action.data.id].selected,
                    [action.data.element.id]: action.data.element
                }}
            }
        case TYPES.UNSELECT_ELEMENT:
            const newState = state,
                selected = newState[action.data.id].selected
            delete selected[action.data.element.id]
            return {
                ...newState,
                [action.data.id]: {
                    ...newState[action.data.id],
                    selected: selected
                }
            }
            return state
        default:
            return state
    }
}