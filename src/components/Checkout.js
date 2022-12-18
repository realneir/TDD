import React, { useState, useEffect } from 'react';

import CartItem from './CartItem';

import '../CSS/Oncet.css';

const Checkout = ({
    products,
    setShowCheckout,
    show,
    sm
}) => {
    const [sum, setSum] = useState(0);


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(false)

    // ni add ta ug fucntion

    let popup = document.getElementById("popup");


    const checkout = () => {
        // alert(`Checkout - Subtotal: ₱ ${sm.toFixed(2)}`);
        openPopup();
    }

    const openPopup = () => {
        popup.classList.add("open-popup");
    }

    const closePopup = () => {
        popup.classList.remove("open-popup");
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.length == 0 || lastName.length == 0) {
            setError(true)
        }
        if (firstName && lastName) {
            console.log("  Email: ", firstName, "\n  Password: ", lastName)
        }
    }


    return (
        show ? (
            <div className="checkout-page">
                {
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="info">Payment Info</div>
                            <div className="input-box">
                                <input className="input-field" placeholder="Email" onChange={e => setFirstName(e.target.value)} />
                            </div>
                            {error && firstName.length <= 0 ?
                                <label>First Name can't be Empty</label> : ""}
                            <div className="input-box">
                                <input className="input-field" placeholder="Address" onChange={e => setLastName(e.target.value)} />
                            </div>

                            {error && lastName.length <= 0 ?
                                <label>Address can't be Empty</label> : ""}
                            <div className="payment-mode">
                                Mode of Payment:
                            </div>
                            <div>
                                <select>
                                    <option>Cash</option>
                                    <option>E-Wallet</option>
                                    <option>Card</option>
                                </select>
                            </div>
                            
                            <div>
                                
                                {/* button */}
                                <button onClick={error == true ? checkout : null} className="check-btn">
                                    Submit 
                                </button>

                                {/* laing way para pop up  */}

                                <div class="popup" id='popup'>
                                    <img src="https://i.ibb.co/b17yNf9/logo.png" className='logojapon' data-testid="logo" />
                                    <h1>Checkout</h1>
                                    <h2>Email: {firstName}</h2>
                                    <h2>Address: {lastName}</h2>
                                    <h2>Subtotal: ₱ ${sm.toFixed(2)}</h2>
                                    <button type="button" onClick={() => closePopup()}>ok</button>
                                </div>

                            </div>
                        </form>
                    </>
                }
                <button onClick={() => setShowCheckout(false)} className="check-btn">Close</button>
            </div>
        ) : null

    )

}

export default Checkout;