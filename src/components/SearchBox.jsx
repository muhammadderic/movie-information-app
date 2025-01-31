'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handlerSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`);
  }

  return (
    <form
      className='my-2 flex justify-between gap-4 px-5 max-w-6xl mx-auto'
      onSubmit={handlerSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-12 px-4 rounded-md placeholder-gray-500 bg-transparent flex-1 border border-gray-500 '
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='cursor-pointer px-4 text-gray-600 hover:text-amber-500 rounded-md border border-gray-500 hover:border-amber-600'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox