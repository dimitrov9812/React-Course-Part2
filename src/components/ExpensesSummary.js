import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header-content">
                    <h1 className="page-header-title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                    <div className="page-header-actions">
                        <Link className="add-expense-link" to="/create"><div className="add-expense-button">Add Expense</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);