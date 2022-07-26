import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from '../redux/searchSlice';
import './search.css';

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearch = ({ target }) => {
    const { value } = target;
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
