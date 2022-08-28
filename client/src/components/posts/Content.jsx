import React from 'react'

function content({title, body}) {
  return (
    <div >
     
        <div className='p-10 m-10 bg-white border rounded-lg shadow-lg border-grey-600'>
            <h1 className='py-2 text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-500'>{body}</p>
        </div>
    </div>
  )
}

export default content