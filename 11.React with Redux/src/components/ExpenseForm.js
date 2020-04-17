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
    constructor (props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.decsription : '',
            note:  props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? new Date(props.expense.createdAt) : new Date(),
            calendarFocused: false,
            error: ''
        };
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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount}));
        }
    }
    onDateChange = (date) => {
        if(date){
            this.setState({
                createdAt: date
              });
        }
        console.log(date);
      };

    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if( !this.state.description ||  !this.state.amount){
            // Set error state equal to "Please provide description and amount."
            this.setState(() => ({
                error: "Please provide description and amount."
            }));
        }
        else{
            this.setState(() =>({
                error: ''
            }));
           this.props.onSubmit({
                decsription: this.state.description,
                amount: parseFloat(this.state.amount,10)*100
                //Transform the date into integer
           });
        }
    }
    render() {
        return(
            <div>
                
                <form onSubmit = {this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
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

