import React from "react";
import clsx from "clsx";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  totalPages: number;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  changeCurrentPage,
}) => {
  const mapPages = () => {
    const pages = Array.from(Array(totalPages).keys());
    const fixPages = pages.slice(1, pages.length);
    let pages2 = [];
    if (currentPage <= 2) {
      pages2 = fixPages.slice(0, fixPages.length >= 5 ? 5 : fixPages.length);
    } else {
      pages2 = fixPages.slice(currentPage - 2, currentPage + 3);
    }
    return pages2.map((page) => {
      return (
        <button
          className={clsx(
            "w-[35px] h-[35px] cursor-pointer rounded-full font-medium text-lg grid place-content-center",
            currentPage === page
              ? "bg-dark-blue text-white"
              : "bg-white text-gray-dark"
          )}
          key={page}
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
      <p className="font-medium text-lg text-gray-dark">
        Showing 12 of 60 Results
      </p>
      <div className="flex justify-center items-center gap-2">
        <FaLongArrowAltLeft className="text-gray-dark" />
        {totalPages > 0 && (
          <>
            <div className="flex justify-center">{mapPages()}</div>
            <p>...</p>
            <div
              className={clsx(
                "w-[35px] h-[35px] cursor-pointer rounded-full font-medium text-lg grid place-content-center",
                currentPage === totalPages
                  ? "bg-dark-blue text-white"
                  : "bg-white text-gray-dark"
              )}
              onClick={() => changeCurrentPage(totalPages)}
            >
              {totalPages}
            </div>
          </>
        )}
        <FaLongArrowAltRight className="text-gray-dark" />
      </div>
    </div>
  );
};
