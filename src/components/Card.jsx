import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

import { getYearFromDate } from '@/utils/dateUtils';

const Card = ({ result }) => {
  let releaseDate = result.release_date || result.first_air_date
  if (releaseDate) {
    releaseDate = getYearFromDate(releaseDate)
  }

  return (
    <div className="group sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Image
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
        height={200}
        width={500}
        className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        alt={''}
      />
      <div className="py-2 px-4">
        <Link href={`/movie/${result.id}`}>
          <h3 className="text-lg font-bold truncate cursor-pointer">
            {result.title || result.name}
          </h3>
        </Link>
        <p className="my-1 line-clamp-2 text-sm">
          {result.overview}
        </p>
        <div className="my-2 flex justify-between">
          <p className="text-sm text-gray-400">
            {releaseDate}
          </p>
          <div className="flex items-center">
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            <p className="text-sm">
              {result.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card