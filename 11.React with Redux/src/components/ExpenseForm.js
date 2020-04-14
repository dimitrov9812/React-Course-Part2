import React from 'react';

// =======Challenge======
// 1. Setup note state
// 2. Setup onChange and value for the text area

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount}));
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                     />
                     <input
                        type="text"
                        placeholder="Amount"
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}
                     />
                     <textarea
                        placeholder="Add a form for your expense."
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                     >
                     </textarea>
                     <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

