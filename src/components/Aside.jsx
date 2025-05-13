import React from 'react';
import{FaReact,
    FaRocket,
    FaBook,
} from"react-icons/fa"

const Aside = () => {
  return (
    <aside className=' bg-gray-200 p-6 rounded shadow-md '>
        <h1 className='text-2xl font-bold mb-2'>📌Related Links</h1>
        <ul className='text-blue-600 space-y-4'>
            <li className='flex gap-1 items-center '><FaBook/> Vite Documentation</li>
            <li className='flex gap-1 items-center '><FaReact/>React Guide</li>
            <li className='flex gap-1 items-center '><FaRocket/>Frontend Trends</li>
        </ul>
    </aside>
  )
}

export default Aside