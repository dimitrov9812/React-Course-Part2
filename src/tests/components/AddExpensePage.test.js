import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpensePage }  from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper;

// run code before each test
beforeEach(() => {
    addExpense = jest.fn();
    // this means history.push will be used as a spy function
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
});

test("Should render AddExpensePage Correctly", () =>{
    expect(wrapper).toMatchSnapshot();
});
test("Should handle onSubmit", () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
});