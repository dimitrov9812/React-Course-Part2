import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
// test array of object to pass down in the test cases
const expenses = [{
    id:'1',
    description: 'App',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id:'2',
    description: 'Rent',
    note: '',
    amount: 2000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id:'3',
    description: 'Red',
    note: '',
    amount: 1253,
    createdAt: moment(0).add(4, 'days').valueOf()
}
];

test('should filter by text value', () =>{
    // filters for the expenses test array
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by startDate', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([ expenses[2], expenses[0]]);
});
// ========Challenge=======
// 1. Should filter by endDate

test('should filter by endDate', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});
// 2. Should sort by date

test('should filter by Date', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

// 3. Should sort by amount

test('should filter by Date', () =>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});