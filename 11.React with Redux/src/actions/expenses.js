import {v4 as uuidv4}  from 'uuid';
// ADD_EXPENSE

export const addExpense = (
    { 
        decsription = '',
        note = '',
        amount = 0,
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE', 
    expenses: {
        id: uuidv4(),
        decsription,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) =>({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE

export const editExpense = ( id , updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});