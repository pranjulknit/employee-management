import React from 'react'
import Header from '../Header/Header';

const AdminDashboard = () => {
  return (
    <div className='bg-gray-100 h-screen flex flex-col '>
        <Header/>
          <div className='bg-gray-100 text-white bg-gray-900 mt-10 w-1/2 ml-50 flex items-center justify-center '>
              
              <form action=" " className=''>
              <h1 className='text-3xl'>Create task</h1>
                 <h3>Task Title</h3>
                 <input type="text" placeholder='enter your title'/>
                 <h3>Description</h3>
                 <textarea name="" id="" cols="30" rows="10"></textarea>
                 <h3>Date</h3>
                 <input type="date" />
                 <h3>Assign to</h3>
                 <input type="text" />
                 <h3>Category</h3>
                 <input type="text" />
              </form>
             
          </div>

    </div>
  )
}

export default AdminDashboard;