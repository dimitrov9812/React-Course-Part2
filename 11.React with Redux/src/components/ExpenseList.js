import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// exporting the unconnected version
export const ExpenseList = (props) => (
  <div>
  {
    props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )
  }
  
  </div>
);

// connected version of ExpenseList
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
