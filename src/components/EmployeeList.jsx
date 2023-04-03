import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getEmployeeList} from './action';

const EmployeeList = () => {

  const dispatch = useDispatch()

  const getEmployee = useSelector(state => state.getEmployeeList);
  const { list, loading, error } = getEmployee
  console.log('list::', list);


  useEffect(() => {
    dispatch(getEmployeeList())
  }, [])

  return (
    <div>
      {loading ?

        <p>Loading...</p>
        :
        list?.length > 0 && list.map(emp =>
          <div key={emp.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>{emp.name}</p>
            <p>{emp.salary}</p>
            <p>{emp.id}</p>
            <p>{emp.department}</p>

          </div>
        )
      }

    </div>
  )
}

export default EmployeeList;


