// =========Challenge=========
// 1. Export a stateless functional component
// 2. Render the descripton, amount, createdAt

import React from 'react';

const ExpensesListItem = ({decsription , amount, createdAt}) => (
    <div>
        <p>{decsription}</p>
        <h3>{amount} - {createdAt}</h3>
    </div>
);

export default ExpensesListItem;