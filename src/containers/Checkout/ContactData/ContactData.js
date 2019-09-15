import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'David',
                address: {
                    street: 'Berwick Farm Drive',
                    zipCode: '30096',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest',
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type='text' name='name' placeholder='Your Name' />
                <input className={styles.Input} type='emial' name='email' placeholder='Your email' />
                <input className={styles.Input} type='text' name='street' placeholder='Street' />
                <input className={styles.Input} type='text' name='zip' placeholder='Zip Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Info</h4>
                {form}
            </div>
        );
    }

}



export default ContactData;