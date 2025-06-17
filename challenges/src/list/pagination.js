import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "./redux";
function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, list } = useSelector((state) => state);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };

  const handleNext = () => {
    if (currentPage < totalPages) dispatch(setPage(currentPage + 1));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
