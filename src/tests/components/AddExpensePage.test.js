import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpensePage }  from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper;

// run code before each test
beforeEach(() => {
    startAddExpense = jest.fn();
    // this means history.push will be used as a spy function
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
});

test("Should render AddExpensePage Correctly", () =>{
    expect(wrapper).toMatchSnapshot();
});
test("Should handle onSubmit", () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
}); 