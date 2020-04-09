import React from 'react';
//Connect to the store
import { connect } from 'react-redux';
import ExpenseListItem from './ExpensesListItem';
import selectExpenses from '../selectors/expenses';

// Regular component -> not connected
const ExpenseList = (props) => (
    <div>
       <h1>Expense List</h1> 
       {props.expenses.map((expense) => {
           return <ExpenseListItem key = {expense.id} {...expense} />
       })}
    </div>
);

// Function for getiing states and assigning them to variables
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}
 
// As store changes our component data changes 
export default connect(mapStateToProps)(ExpenseList);