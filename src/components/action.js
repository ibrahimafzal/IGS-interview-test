 export const getEmployeeList = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_EMPLOYEE_LIST_REQUEST'
        });
        return fetch('https://641b1f8e1f5d999a445bf904.mockapi.io/Employee')
        .then(res => res.json())
        .then(list => dispatch({
            type: 'FETCH_EMPLOYEE_LIST_SUCCESS',
            payload:list
        }))
        .catch(error => dispatch({
            type:'FETCH_EMPLOYEE_LIST_FAILED',
            payload: error
        }))

    }
}

export const addEmployee = (data) => {
    console.log("data::", data);
    return dispatch => {
        dispatch({
            type: 'ADD_EMPLOYEE_REQUEST'
        });
        return fetch('https://641b1f8e1f5d999a445bf904.mockapi.io/Employee', {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(list => dispatch({
            type: 'ADD_EMPLOYEE_SUCCESS',
            payload:list
        }))
        .catch(error => dispatch({
            type:'ADD_EMPLOYEE_FAILED',
            payload: error
        }))

    }
}

// export  {getEmployeeList, addEmployee};