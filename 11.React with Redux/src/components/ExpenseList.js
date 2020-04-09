import React from 'react';
//Connect to the store
import { connect } from 'react-redux';

// Regular component -> not connected
const ExpenseList = (props) => (
    <div>
       <h1>Expense List</h1> 
       {props.expenses.length}
       {props.filters.text}
    </div>
);

// Function for getiing states and assigning them to variables
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}
 
// As store changes our component data changes 
export default connect(mapStateToProps)(ExpenseList);