import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filtredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
