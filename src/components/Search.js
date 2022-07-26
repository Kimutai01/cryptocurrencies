import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../feature/searchSlice";
import "./search.css";

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  console.log(searchTerm);

  const onSearch = ({ target }) => {
    const { value } = target;
    console.log(value);
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="search">
      <div className="search-div">
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={onSearch}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
