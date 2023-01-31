import { FilterBarWrapper } from "./styles";

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      <div>
        <span>Category</span>
        <select name="category" id="category">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div>
        <span>Price</span>
        <select name="category" id="category">
          <option value="1">Low to High</option>
          <option value="2">High to Low</option>
        </select>
      </div>
      <div>
        <span>Price</span>
        <select name="category" id="category">
          <option value="1">Low to High</option>
          <option value="2">High to Low</option>
        </select>
      </div>
    </FilterBarWrapper>
  );
};

export default FilterBar;
