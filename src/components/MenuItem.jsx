import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="hover:text-amber-500 flex align-center gap-2"
    >
      <Icon className="sm:hidden" />
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem