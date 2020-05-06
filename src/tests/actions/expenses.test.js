import { setExpenses, 
  addExpense, 
  editExpense, 
  removeExpense,
  startAddExpense, 
  startRemoveExpense
 } from '../../actions/expenses';
import expenses from "../fixtures/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

// setup the mockStore
const createMockSore = configureMockStore([thunk]);

beforeEach((done) =>{
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt};
  });
  database.ref('expenses').set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from firebase', (done) =>{
  const store = createMockSore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().toBeFalsy());
    done();
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData
    }
  });
});

test('should setup add expense action object with default values', () => {
  const defaultExpense = {
    description : '',
      note : '',
      amount : 0,
      createdAt : 0 
  } 
  const action = addExpense(defaultExpense);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: defaultExpense
    });
});

test('should setup add expense action object with given values', () => {
  const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
    });
});

// this is a async test
// the test end only when we call done();
test('should setup add expense to the database and store', (done) => {
  const store = createMockSore({});
  const expenseData = {
    description: 'Monitor',
    amount: 888,
    note: 'This is the best monitor',
    createdAt: 23
  }



  store.dispatch(startAddExpense(expenseData)).then(() =>{
    // get all the actions of our mock store
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    })
    // check if the expense is stored in the database
    database.ref(`actions/${actions[0].expense.id.once('value'.then((snapshot) =>{
      expect(snapshot.val()).toEqual(expenseData);
      
    }))}`)
    done();
  });

  // we will use promise chaining
});

test('should setup add expense with defaults to the database and store', () => {
  const store = createMockSore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense(expenseDefaults)).then((done) =>{
    // get all the actions of our mock store
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseDefaults
      }
    })
    // check if the expense is stored in the database
    database.ref(`actions/${actions[0].expense.id.once('value'.then((snapshot) =>{
      expect(snapshot.val()).toEqual(expenseData);
      done();
    }))}`)
  });
});


test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSE',
    expenses
  })
});


