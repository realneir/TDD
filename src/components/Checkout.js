import React, { useState, useEffect } from 'react';

import CartItem from './CartItem';
// import '../CSS/checkout.css';


const Checkout = ({
  products,
  setShowCheckout,
  show,
  }) => {
    const [sum, setSum] = useState(0);

    // define a function to handle form submission
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [error,setError]=useState(false)


    const checkout = () => {
        alert(`Checkout - Subtotal: ₱ ${sum.toFixed(2)}`);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length===0||lastName.length===0){
            setError(true)
        }
        if(firstName&&lastName)
        {
        console.log("Email: ",firstName,"\nPassword: ",lastName)
        }
    }


    return (
        show ? (
          <div className="checkout-modal">
              { 
                      <>
           <form onSubmit={handleSubmit}>
               <div>Payment Info</div>
               <div>
                   <input placeholder="Email" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=0?
               <label>First Name can't be Empty</label>:""}
               <div>
                   <input placeholder="Password" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=0?
               <label>Last Name can't be Empty</label>:""}
               <div>
                   <button onClick={checkout} className="check-btn">
                       Submit
                   </button>
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