import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';

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

// we will simulate click with this test
test('shoul render ERROR for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test("should set description on input change", () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    }) 
    expect(wrapper.state('description')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// ============Challenge=============
// 1. Should set note on Text area change

test("should set note on text change", () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('textarea').simulate('change',{
        target: { value }
    }) 
    expect(wrapper.state('note')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// 2. Shoud set amount if valid input
// Example: 23.50

test("should set amount if valid input", () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input').at(1).simulate('change',{
        target: { value }
    })

    expect(wrapper.state('amount')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// 3. Shound not set amount if invalid input
// Example: 12.122

test("should not set amount if invalid input", () => {
    const value = '23.50323'
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input').at(1).simulate('change',{
        target: value
    })

    expect(wrapper.state('amount')).toBe(undefined);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should call onSubmit propr for a valid form submission", () =>{
    // returns the new spy
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense= {expenses[0]} onSubmit = {onSubmitSpy} />);
   
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test("Should call on date change", () => {
    
});

test("Should call on focus change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test("Should call on focus change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
