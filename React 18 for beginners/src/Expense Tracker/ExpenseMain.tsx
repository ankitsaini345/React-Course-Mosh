import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const ExpenseMain = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, amount: 10, description: "test1", category: "c1" },
    { id: 2, amount: 20, description: "test2", category: "c1" },
    { id: 3, amount: 30, description: "test3", category: "c1" },
    { id: 4, amount: 40, description: "test4", category: "c1" },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id));
    console.log(id + " deleted");
  };

  return <ExpenseList expenses={expenses} onDelete={onDelete} />;
};

export default ExpenseMain;
