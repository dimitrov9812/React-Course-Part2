import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
const expenseOne = store.dispatch(addExpense({ decsription:'Water Bill', amount: 130}));
// addExpense -> Gas bill
const expenseTwo = store.dispatch(addExpense({ decsription:'Gas Bill', amount: 120}));
// setTextFilter -> bill (should see 2 items) water(should see 1 item)
store.dispatch(setTextFilter('Water'));

setTimeout(() => {
  store.dispatch(setTextFilter('Gas'));
}, 3000);
// getVisibleExpenses -> print visible to the screen
const storeState = store.getState();
const visibleExpenses = getVisibleExpenses(storeState.expenses, storeState.filters);
//print the visible expenses on the console
console.log(visibleExpenses);
//we use the 'Switch' to make the 404 page available.

// Provider is used to pass the store to a react component
// We have to specifty a variable name for the store and then pass the store
// In our case we named the variable 'store' and passed it '{store}'.
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
  const componentDiv = $("#app")[0];
  ReactDOM.render(jsx,componentDiv);
