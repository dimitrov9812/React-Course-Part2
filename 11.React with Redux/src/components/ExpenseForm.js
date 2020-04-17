import React from 'react';
// We will use Moment.js for managing time
import moment from 'moment';
// Also we will use airbnb react-dates
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const now = moment();
console.log(now.format("MMM Do YYYY"));  

// =======Challenge======
// 1. Setup note state
// 2. Setup onChange and value for the text area

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: new Date(),
        calendarFocused: false
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
    onDateChange = (date) => {
        this.setState({
          createdAt: date
        });
        console.log(date);
      };

    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    render() {
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
                     <DatePicker
                        selected={this.state.createdAt}
                        onChange={this.onDateChange}
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

