import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
test('Should render ExpenseForm correcty', () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// we need to mock the moment library because of the date error
// it happens because when Expense is created it gets the current point in time
// and in the second run test it is different

// ============Challenge=============
// 1. Should render ExpenseForm with expense data
// 2. Make a snapshot

test('Should render ExpenseForm with expense data', () =>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});