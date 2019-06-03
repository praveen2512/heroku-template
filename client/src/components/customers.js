import React from 'react';

class Customers extends React.Component {

    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({
                customers
            }, () => console.log(customers)))
    }

    render() {
        return (
            <div className="App">
                <h1>Customers</h1>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Customers;
