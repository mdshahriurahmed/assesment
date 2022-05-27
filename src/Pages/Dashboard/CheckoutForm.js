import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [carderror, setCarderror] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState('');
    const { _id: id, totalCost, clientEmail, clientName, toolId,
        img, toolName, quantity, phone, location, paid, approved } = order;
    const price = totalCost;
    useEffect(() => {
        fetch('https://fierce-dawn-28408.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    console.log(data.clientSecret);
                    setClientSecret(data.clientSecret);
                }
            })

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCarderror(error?.message || '')
        setSuccess('');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: clientName,
                        email: clientEmail
                    },
                },
            },
        );
        if (intentError) {
            setCarderror(intentError.message);

        }
        else {
            setCarderror('');
            setTransactionId(paymentIntent.id);
            setSuccess('Your Payment is Completed');

            const updatedPurchase = {
                totalCost: totalCost,
                clientEmail: clientEmail,
                clientName: clientName,
                toolId: toolId,
                img: img,
                toolName: toolName,
                quantity: quantity,
                phone: phone,
                location: location,
                paid: true,
                approved: false,
                t_id: paymentIntent.id
            }

            fetch(`https://fierce-dawn-28408.herokuapp.com/updatepayment/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedPurchase)
            })
                .then(res => res.json())
                .then(data => {
                    navigate('/dashboard/myorders');

                })



        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-xs btn-primary px-5 mt-4' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                carderror && <p className='text-primary'>{carderror}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p >{success}</p>
                    <p>Your transaction ID: <span className='text-primary'>{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;