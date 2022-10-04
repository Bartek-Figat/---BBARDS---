import React from "react";
import clsx from "clsx";

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
        <div
          className={clsx(
            "p-4 ml-4 cursor-pointer",
            currentPage === page
              ? "bg-dark-blue text-white"
              : "bg-white text-dark-blue"
          )}
          key={page}
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </div>
      );
    });
  };

  return (
    <div className="mt-8">
      {totalPages > 0 && (
        <div className="flex justify-center">{mapPages()}</div>
      )}
    </div>
  );
};
