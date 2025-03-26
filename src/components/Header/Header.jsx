import React from 'react'

const Header = ({name}) => {
  return (
    <div>

        <div className='flex justify-between items-end p-5 bg-gray-900 text-white'>
            <h1 className='text-xl font-medium' >Hello <br /><span className='text-3xl font-bold'>Pranjul 👋</span>   </h1>
            <button className='bg-red-500 text-lg text-white px-4 py-3 font-bold rounded-4xl'>Logout</button>
        </div>
    </div>
  )
}

export default Header