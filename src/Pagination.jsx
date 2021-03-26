/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";

const Pagination = ({ limit, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberofButtons, setNumberofButtons] = useState(
    Math.ceil(total / limit)
  );
  useEffect(() => {
    const value = limit * counter;
    onPaginationChange(value - limit, value);
  }, [counter]);

  const handleclick = (type) => {
    if (type === "prev") {
      counter === 1 ? setCounter(1) : setCounter(counter - 1);
    } else {
      numberofButtons === counter
        ? setCounter(counter)
        : setCounter(counter + 1);
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={() => handleclick("prev")}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        
          {
            new Array(numberofButtons).fill("").map((el, index) => (
          
            <li
              class={`page-item ${index + 1 === counter ? "active" : "null"}`}
            >
              <a
                class="page-link"
                href="#"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
            
          ))}

          
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={() => handleclick("next")}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
