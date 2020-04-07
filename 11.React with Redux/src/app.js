import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();


// =========Challenge=========
// addExpense -> Water bill 
const expenseOne = store.dispatch(addExpense({ decsription:'Water Bill'}));
// addExpense -> Gas bill
const expenseTwo = store.dispatch(addExpense({ decsription:'Gas Bill'}));
// setTextFilter -> bill (should see 2 items) water(should see 1 item)
store.dispatch(setTextFilter('Water'));
// getVisibleExpenses -> print visible to the screen
const storeState = store.getState();
const visibleExpenses = getVisibleExpenses(storeState.expenses, storeState.filters);
//print the visible expenses on the console
console.log(visibleExpenses);
//we use the 'Switch' to make the 404 page available

  const componentDiv = $("#app")[0];
  ReactDOM.render(<AppRouter />,componentDiv);
