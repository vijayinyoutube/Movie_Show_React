import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize } = props;

  const pagesCount = Math.ceil(itemCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
