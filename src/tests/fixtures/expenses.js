import moment from 'moment';

export default [{
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