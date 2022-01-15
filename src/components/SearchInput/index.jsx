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
