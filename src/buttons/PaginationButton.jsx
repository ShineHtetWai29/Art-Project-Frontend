import { useState } from "react";

function PaginationButtons({ postsPerPage, totalPages, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <nav>
      <ul className="flex justify-center gap-2 mb-5">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-4 py-4 ${
                activePage === number ? "bg-primary text-white" : "bg-gray-400 text-black"
              }`}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PaginationButtons;
