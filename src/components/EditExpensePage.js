import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, removeExpense, startRemoveExpense } from '../actions/expenses';

// =============Challenge============
// 1. Refactor EditExpensePage to be a class based component
// 2. Setup mapDispatchToProps editExpense and removeExpense

export class EditExpensePage extends React.Component{
  onSubmit=(expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove= () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render(){
    return (
        <div className="input-group-edit">
          <div className="edit-form-div">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          </div>
         <div className="remove-button-div">
          <button className="remove-button" onClick={this.onRemove}>Remove</button>  
         </div>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id,expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
