import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

//======AsyncActions
// component calls action generator
// action generator returns function
// component dispatches fucntion (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) =>{
  // this would not work without the thunk
  // we set up function for adding expense to communicate with firebase
  return (dispatch) => {
    // destruct expenseData 
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData

    // define the variable
    const expense = { description, note, amount, createdAt};

    return database.ref('expenses').push(expenseData).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });

  };
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
