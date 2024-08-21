import React from "react";
import style from "./Pagination.module.css";

interface PaginationProps {
  articlesPerPage: number;
  totalArticles: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ articlesPerPage, totalArticles, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pagination}>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={number === currentPage ? style.active : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
