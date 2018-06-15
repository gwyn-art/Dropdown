export const TYPES = {
    ADD_DROPDOWN: 'ADD_DROPDOWN',
    SELECT_ELEMENT: 'SELECT_ELEMENT',
    UNSELECT_ELEMENT: 'UNSELECT_ELEMENT'
}

export const addDropdown = (data) => ({
    type: TYPES.ADD_DROPDOWN,
    data
})

export const selectElement = (data) => ({
    type: TYPES.SELECT_ELEMENT,
    data
})

export const unselectElement = (data) => ({
    type: TYPES.UNSELECT_ELEMENT,
    data
})