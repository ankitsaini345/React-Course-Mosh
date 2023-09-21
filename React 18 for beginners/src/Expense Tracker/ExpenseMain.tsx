import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const ExpenseMain = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, amount: 10, description: "test1", category: "cat 1" },
    { id: 2, amount: 20, description: "test2", category: "cat 2" },
    { id: 3, amount: 30, description: "test3", category: "cat 3" },
    { id: 4, amount: 40, description: "test4", category: "cat 1" },
  ]);

  const [selectedCategory, setCategory] = useState("");

  let visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category == selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id));
    console.log(id + " deleted");
  };

  const onSelectCategory = (category: string) => {
    setCategory(category);
    console.log(category + "selected");
  };

  return (
    <>
      <ExpenseFilter onSelectCategory={onSelectCategory} />
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </>
  );
};

export default ExpenseMain;
