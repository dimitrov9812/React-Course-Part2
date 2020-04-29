import moment from 'moment';

// default  filters
const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// filters with data
const filtersWithData = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3,'days')
}

export { filters, filtersWithData}