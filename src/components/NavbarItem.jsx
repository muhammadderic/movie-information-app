'use client'
import React from 'react'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold text-white ${genre === param
          ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
          : ''
          }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavbarItem