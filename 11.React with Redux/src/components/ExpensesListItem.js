// =========Challenge=========
// 1. Export a stateless functional component
// 2. Render the descripton, amount, createdAt

import React from 'react';
import { Link } from 'react-router-dom';

// Here we have a template for an Expense list item 
// We show it's description it's amount and when it is Created At
// We call the function dispatch and give it removeExpense function
// wich get's the id from the current element and deletes it.
// This function triggers when we click the remove button function
const ExpensesListItem = ({id,decsription , amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <p>{decsription}</p>
        </Link>
        <h3>{amount} - {createdAt}</h3>
    </div>
);

export default (ExpensesListItem);