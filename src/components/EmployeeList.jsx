import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeList } from './action';
import { Link } from 'react-router-dom';
import '../components/styles.css'

const EmployeeList = () => {

  const dispatch = useDispatch()

  const getEmployee = useSelector(state => state.getEmployeeList);
  const { list, loading, error } = getEmployee
  console.log('list::', list);


  useEffect(() => {
    dispatch(getEmployeeList())
  }, [])
  if (loading)
    return <p>Loading...</p>

  return (
    <div style={{ margin: '20px' }}>
      <div className='' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Employees</h1>
        <Link to='/addEmployee'>Add Employe</Link>
      </div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
        {
          list?.length > 0 && list.map(emp =>
            <tr>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          )}
      </table>
    </div>
  )
}

export default EmployeeList;


