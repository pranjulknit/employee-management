import React from 'react'

const Countcomponent = () => {
  return (
    <div className='flex gap-5 justify-between mt-5 mx-5 screen'>
        <div className='bg-red-400 h-40 w-[45%] rounded-2xl px-9 py-5 text-white flex flex-col gap-5'>
            <h1 className='font-bold text-5xl'>0</h1>
            <h3 className='font-bold text-2xl'>New task</h3>
        </div>
        <div className='bg-blue-500 h-40 w-[45%] rounded-2xl px-9 py-5 text-white flex flex-col gap-5'>
            <h1 className='font-bold text-5xl'>0</h1>
            <h3 className='font-bold text-2xl'>New task</h3>
        </div>
        <div className='bg-green-300 h-40 w-[45%] rounded-2xl px-9 py-5 text-white flex flex-col gap-5'>
            <h1 className='font-bold text-5xl'>0</h1>
            <h3 className='font-bold text-2xl'>New task</h3>
        </div>
        <div className='bg-yellow-500 h-40 w-[45%] rounded-2xl px-9 py-5 text-white flex flex-col gap-5'>
            <h1 className='font-bold text-5xl'>0</h1>
            <h3 className='font-bold text-2xl'>New task</h3>
        </div>
    </div>
  )
}

export default Countcomponent;