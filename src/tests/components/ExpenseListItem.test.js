import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

// =========Challenge=========
// 1. Create test file
// 2. Grab the imports
// 3. Create test case for Rendering ExpenseListItem with the fixtures expenses
// 4. Create the snapshot

test("should render ExpenseListItem correct", () => {
const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
});