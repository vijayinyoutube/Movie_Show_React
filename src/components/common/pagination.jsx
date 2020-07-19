import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm justify-content-end">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => onPageChange(page)}
              className="page-link"
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
