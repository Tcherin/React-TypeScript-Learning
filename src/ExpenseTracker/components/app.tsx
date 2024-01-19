import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 2,
      description: "film",
      amount: 10,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "hammer",
      amount: 4,
      category: "Utilities",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(idToDelete) =>
          setExpenses(expenses.filter((e) => e.id !== idToDelete))
        }
      />
    </>
  );
}

export default App;
