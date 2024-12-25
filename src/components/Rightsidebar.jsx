'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import News from './News';

export default function Rightsidebar() {
  const router = useRouter()
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim==='' || !input) return;
    router.push(`/search/${input}`);
  }
  return (
    <>
      <div className='sticky top-0 bg-white p-2'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}
          className='rounded-3xl bg-gray-200 border border-gray-300 text-sm w-full px-4 py-3'
          />
        </form>
      </div>
      <News/>
    </>
  )
}
