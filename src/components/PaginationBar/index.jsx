import Link from "next/link"

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"

const PaginationBar = ({ page, limit, pathname, queryParams, title }) => {
  return (
    <div className="flex mx-auto max-w-6xl mt-5 border-b-4 pb-3 border-red-600 items-center justify-between">
      <h2 className="dark:text-white text-3xl">{title}</h2>
      <div className="flex gap-2 items-center">
        <Link
          scroll={false}
          href={{
            pathname,
            query: {
              ...queryParams,
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={`${
            page === 1
              ? "opacity-30 hover:text-white cursor-no-drop"
              : "hover:text-red-600"
          } flex gap-1 items-center dark:text-white px-3 py-1 text-lg font-bold text-gray-800`}
        >
          <MdNavigateBefore className="text-3xl" />
          Previous
        </Link>
        <span className="text-xl text-white">
          {page}/{limit}
        </span>
        <Link
          scroll={false}
          href={{
            pathname,
            query: {
              ...queryParams,
              page: page === limit ? limit : page + 1,
            },
          }}
          className={`${
            page === limit
              ? "opacity-30 hover:text-white cursor-no-drop"
              : "hover:text-red-600"
          } flex gap-1 items-center dark:text-white px-3 py-1 text-lg font-bold text-gray-800`}
        >
          Next
          <MdNavigateNext className="text-3xl" />
        </Link>
      </div>
    </div>
  )
}

export default PaginationBar
