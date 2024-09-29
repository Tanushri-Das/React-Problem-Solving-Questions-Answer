import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevNextClick = (type) => {
    if (type === "prev" && currentPage > 1) {
      onPageChange(currentPage - 1);
    } else if (type === "next" && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];

    const getButtonClass = (page) => {
      return currentPage === page
        ? "border-[#09A5D6] text-[#09A5D6]"
        : "border-[#DFE3E8] text-black";
    };

    pages.push(
      <button
        key="1"
        onClick={() => handleClick(1)}
        className={`px-3 py-1 border ${getButtonClass(1)}`}
        disabled={currentPage === 1}
      >
        1
      </button>
    );

    if (totalPages > 1) {
      pages.push(
        <button
          key="2"
          onClick={() => handleClick(2)}
          className={`px-3 py-1 border ${getButtonClass(2)}`}
          disabled={currentPage === 2}
        >
          2
        </button>
      );
    }

    if (totalPages > 8) {
      pages.push(
        <span key="dots1" className="px-3 py-1">
          ...
        </span>
      );
    }

    if (totalPages > 8) {
      pages.push(
        <button
          key="9"
          onClick={() => handleClick(9)}
          className={`px-3 py-1 border ${getButtonClass(9)}`}
          disabled={currentPage === 9}
        >
          9
        </button>
      );
    }

    if (totalPages > 9) {
      pages.push(
        <button
          key="10"
          onClick={() => handleClick(10)}
          className={`px-3 py-1 border ${getButtonClass(10)}`}
          disabled={currentPage === 10}
        >
          10
        </button>
      );
    }

    return pages;
  };

  const getPrevButtonClass = () => {
    return currentPage === 1
      ? "bg-[#919EAB] text-[#C4CDD5]"
      : "border-[#DFE3E8] text-black";
  };

  const getNextButtonClass = () => {
    return currentPage === totalPages
      ? "bg-[#919EAB] text-[#C4CDD5]"
      : "border-[#DFE3E8] text-[#C4CDD5]";
  };

  return (
    <div className="flex justify-center mt-14 space-x-2">
      <button
        onClick={() => handlePrevNextClick("prev")}
        disabled={currentPage === 1}
        className={`px-3 py-1 border ${getPrevButtonClass()}`}
      >
        <FaAngleLeft className="text-xl" />
      </button>
      {renderPagination()}
      <button
        onClick={() => handlePrevNextClick("next")}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border ${getNextButtonClass()}`}
      >
        <FaAngleRight className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;
