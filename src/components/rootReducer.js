import { combineReducers } from "redux";
import employeeReducer from "./reducer";
import addEmployeeReducer from "./addemployeereducer";


const rootReducer = combineReducers({
    getEmployeeList: employeeReducer,
    addEmployeeReducer:addEmployeeReducer
})

export default rootReducer;