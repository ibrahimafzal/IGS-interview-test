import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from './action';

const AddEmployee = () => {
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('')

  const dispatch = useDispatch();

  const addEmployees = useSelector(state => state.addEmployeeReducer)
  // const { list, loading, error } = addEmployee


  const handleAddEmployee = () =>{
    console.log("handleAddEmployee is running");
    dispatch(addEmployee({name,department,salary}))
  }

  return (
    <div style={{display:'flex'}}>
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='department' value={department} onChange={(e) => setDepartment(e.target.value)}/>
      <input type="text" placeholder='salary'value={salary} onChange={(e) => setSalary(e.target.value)}/>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  )
}

export default AddEmployee