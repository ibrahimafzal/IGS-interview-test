const initialState = {
    list: [],
    loading: false,
    error: null
}
const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEE_LIST_REQUEST':
            // console.log("dataReducer::", data);
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'FETCH_EMPLOYEE_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                list: action.payload
            }

        case 'FETCH_EMPLOYEE_LIST_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

            default:
                return state;
    }
}

export default employeeReducer;