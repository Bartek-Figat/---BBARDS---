import React from "react";

interface Props {
  totalPages: number;
  changeCurrentPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  totalPages,
  changeCurrentPage,
}) => {
  const mapPages = () => {
    return Array.from(Array(totalPages).keys()).map((page) => {
      return (
        <div
          className="bg-dark-blue p-4 text-white ml-4"
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
