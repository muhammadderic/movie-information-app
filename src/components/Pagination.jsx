const Pagination = ({ genre, page, totalPages }) => {
  return (
    <div className="flex justify-center gap-4 my-8">
      <a
        href={`/?genre=${genre}&page=${Number(page) - 1}`}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${page <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        aria-disabled={page <= 1}
      >
        Previous
      </a>
      <span className="px-4 py-2">
        Page {page} of {totalPages}
      </span>
      <a
        href={`/?genre=${genre}&page=${Number(page) + 1}`}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${page >= totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        aria-disabled={page >= totalPages}
      >
        Next
      </a>
    </div>
  )
}

export default Pagination
