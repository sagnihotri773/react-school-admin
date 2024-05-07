import React from 'react'

export default function common({ title }) {
  return (
    <div className='rounded-lg border border-gray-200 p-2'>
      <h1 className='bold h4 p-0 m-0 text-black'> {title} </h1>
    </div>
  )
}
