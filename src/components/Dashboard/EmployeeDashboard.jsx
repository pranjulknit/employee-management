import React from 'react'
import Header from '../Header/Header'
import Countcomponent from '../Countcomponent/Countcomponent'
import Tasklist from '../Taskslist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div>

        <div>
            <Header/>
            <Countcomponent/>
            <Tasklist/>
        </div>
    </div>
  )
}

export default EmployeeDashboard