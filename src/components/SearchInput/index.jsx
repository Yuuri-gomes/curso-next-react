import P from "prop-types";
import React from "react";
import "./styles.css";

export const SearchInputComponent = ({ searchValue, handleChange }) => {
  return (
    <input
      className="search-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

SearchInputComponent.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
