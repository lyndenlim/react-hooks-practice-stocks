import React from "react";

function SearchBar({ category, setCategory, isClicked,  setIsClicked}) {
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input

          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isClicked === "Alphabetically"}
          onChange={e => setIsClicked(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isClicked === "Price"}
          onChange={e => setIsClicked(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={e => setCategory(e.target.value)} value={category}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
