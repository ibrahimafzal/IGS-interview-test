const initialState = {
    list: [],
    loading: false,
    error: null
}
const addEmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'ADD_EMPLOYEE_SUCCESS':
            return {
                ...state,
                loading: false,
                list: [...state.list, action.payload]
            }

        case 'ADD_EMPLOYEE_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

            default:
                return state;
    }
}

export default addEmployeeReducer;