import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditExpensePage }  from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let startEditExpense,startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(
    <EditExpensePage 
    startEditExpense = {startEditExpense} 
        startRemoveExpense = {startRemoveExpense}
        history={history}
        expense = {expenses[1]}
    />)
})

// =============Challenge============
// 1. Should render EditExpensePage - snapshot
// 2. Should handle editExpense -spy
// 3. Should handle removeExpense -spy

test("Should render EditExpense correctly",() =>{
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should handle editExpense", () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
})

test("Should handle removeExpense", () =>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    });
})
   
   