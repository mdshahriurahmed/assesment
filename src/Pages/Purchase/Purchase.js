import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Purchase = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `https://fierce-dawn-28408.herokuapp.com/purchase/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])
    const { _id, img, name, available_quantity, min_order_quantity, price, description } = tool;

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }

    const [warn, setWarn] = useState('');

    const handlePurchase = event => {
        event.preventDefault();
        const userName = user.displayName;
        const userEmail = user.email;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        const location = event.target.location.value;
        const paid = false;
        const approved = false;
        const t_id = null;
        const cost = quantity * price;

        if (quantity > available_quantity) {
            setWarn(`Quantity can not be more than ${available_quantity}`);
            return;
        }
        if (quantity < min_order_quantity) {
            setWarn(`Quantity can not be less than ${min_order_quantity}`);
            return;
        }

        const purchaseData = {
            toolId: _id,
            img: img,
            toolName: name,
            quantity: quantity,
            totalCost: cost,
            clientName: userName,
            clientEmail: userEmail,
            phone: phone,
            location: location,
            paid: paid,
            approved: approved,
            t_id: t_id

        }

        fetch('https://fierce-dawn-28408.herokuapp.com/purchasing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseData)
        })
            .then(res => res.json)
            .then(data => {

                alert('Check your order page and confirm the order by completing payment.');
                const newavailablequantity = available_quantity - quantity;

                const updatedTool = {
                    img: img,
                    name: name,
                    available_quantity: newavailablequantity,
                    min_order_quantity: min_order_quantity,
                    price: price,
                    description: description
                };

                fetch(`https://fierce-dawn-28408.herokuapp.com/newtool/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedTool)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate('/dashboard/myorders');

                    })
            })



    }

    return (
        <div className='pb-16'>
            <h1 className='text-5xl text-center text-white my-8'>Purchase</h1>
            <div className='grid grid-cols-1 lg-w-1/2 md-w-1/2 lg:grid-cols-2 md:grid2cols-2 px-10 justify-center gap-10'>
                <div className=' bg-white rounded-lg p-10'>
                    <div className='flex justify-center'><img src={img} alt="" /></div>

                    <h2 className='text-3xl text-primary font-bold'>Name: {name}</h2>
                    <hr className='my-2' />
                    <h3 className='text-xl'><span className='font-bold'>USD$ {price}</span> <span className='text-accent'>/ Piece</span></h3>
                    <hr className='my-2' />
                    <h3 className='text-accent '>Available Qty: {available_quantity} Piece</h3>
                    <hr className='my-2' />
                    <h3 className='text-accent '>Min Order Qty: {min_order_quantity} Piece</h3>
                    <hr className='my-2' />
                    <p>{description}</p>
                </div>
                <div className=' bg-accent rounded-lg p-10'>
                    <h1 className='text-center text-primary text-5xl font-serif mb-8'>Order Info</h1>
                    <form onSubmit={handlePurchase}>
                        <input name="name" disabled type="text" class="input caret-secondary bg-neutral  drop-shadow-lg  w-full text-xl" value={user.displayName} />
                        <input name="email" type="text" disabled class="input mt-5  bg-neutral  text-xl drop-shadow-lg  w-full" value={user.email} />

                        <input name="phone" type="text" placeholder="Enter Phone Number" class="input mt-5  drop-shadow-lg bg-neutral text-xl   w-full" required />
                        <input name="location" type="text" placeholder="Enter Shipping Location" class="input mt-5  drop-shadow-lg bg-neutral text-xl   w-full" required />



                        <input name="quantity" type="number" placeholder="Enter Quantity" required class="input mt-5 drop-shadow-lg  bg-neutral text-xl  w-full" />
                        <p className='text-secondary mt-2 ml-1 text-start'>{warn}</p>
                        <input type="submit" for="my-modal-6" className='bg-secondary px-5 mt-5 py-2 rounded-lg w-full font-bold drop-shadow-lg cursor-pointer hover:bg-yellow-500' value="Add to Order List" />

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Purchase;