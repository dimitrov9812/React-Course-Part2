import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// exporting the unconnected version
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">
        Expenses
      </div>
      <div className="show-for-desktop expense-tag">
        Expense
      </div>
      <div className="show-for-desktop date-tag">
        Date
      </div>
      <div className="show-for-desktop amount-tag">
        Amount
      </div>
    </div>
    <div className="expense-list">
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
  </div>
);

// connected version of ExpenseList
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
