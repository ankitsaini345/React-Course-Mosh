import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        className="form-select"
      >
        <option value="">All</option>
        <option value="cat 1">cat 1</option>
        <option value="cat 2">cat 2</option>
        <option value="cat 3">cat 3</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
