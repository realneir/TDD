// import React, { Fragment, useState, useEffect } from 'react';

// import CartItem from './CartItem';

// const Cart = ({products, changeQuantity}) => {

//     const [classActive, toggleClass] = useState(false);
//     const [sum, setSum] = useState(0);

//     const toggleButton = () => {
//         toggleClass(!classActive);
//     }

//     useEffect(() => {
//         let total = 0;
//         for(var i = 0; i < products.length ; i++) {
//             total+= products[i].price*products[i].quantity;
//         }
//         setSum(total);
//     }, [products])

//     const checkout = () => {
//         alert(`Checkout - Subtotal: ₱ ${sum.toFixed(2)}`)
//     }

//     return (
//         <Fragment>
//             <div id="sidebar" className={classActive ? "active" : ""}>
//                 <div className="sidebar-content">
//                     <div className="toggle-btn" onClick={toggleButton} data-testid="navcart">
//                     <img src="https://i.ibb.co/Kmm2YdD/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" className="slider-btn"/>
//                     </div>
                    
//                     <div className="cart-content">
//                     <h3>
//                         <img src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" />
//                         Cart
//                     </h3> 

//                     <div className="cart-list" data-testid="cart">
//                         {
//                             products.length === 0 
//                             ? 
//                             <div className="empty-cart" data-testid="empty">
//                                 <p>There are no items in Cart, Please add items to checkout!!!</p>
//                             </div> 
//                             :
//                             products.map(product => {
//                                 return (
//                                     <CartItem 
//                                         key={product.id} 
//                                         product={product} 
//                                         changeQuantity={changeQuantity} 
//                                          />
//                                 )
//                             })
//                         }
//                     </div>

//                     <div className="checkout-div" data-testid="checkout">
//                         <div className="checkout">
//                                 <div className="subtotal-div">
//                                     <p className="subtotal">SUBTOTAL</p>
//                                     <p className="subtotal-price" data-testid="subtotal">₱ {sum.toFixed(2)}</p>
//                                 </div>
//                                 <button className="checkout-btn" data-testid="checkoutbtn" onClick={checkout}>CHECKOUT</button>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

// export default Cart;

import React, { Fragment, useState, useEffect } from 'react';

import CartItem from './CartItem';
import Checkout from './Checkout';
import '../CSS/Oncet.css';

const Cart = ({products, changeQuantity,show}) => {
  
  const [showCheckout, setshowCheckout] = useState(false);

  const [classActive, toggleClass] = useState(false);
  const [sum, setSum] = useState(0);



  const toggleButton = () => {
    toggleClass(!classActive);
  }

  useEffect(() => {
    let total = 0;
    for(var i = 0; i < products.length ; i++) {
        total+= products[i].price*products[i].quantity;
    }
    setSum(total);
  }, [products])

  const showCheckoutModal = () => {
   setshowCheckout(true);
  }
  
    return (
      
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""}>
                
                <div className="sidebar-content">
                    <div className="toggle-btn" onClick={toggleButton} data-testid="navcart">
                    <img src="https://i.ibb.co/Kmm2YdD/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" className="slider-btn"/>
                    </div>
                    {(showCheckout &&
                    <div className="overlay">
                    <div className="checkout-modal">
                    <Checkout 
                    show={showCheckout}
                    setShowCheckout={setshowCheckout}
                    key={products.id} 
                    product={products} 
                    changeQuantity={changeQuantity} 
                    sm = {sum}
                    />
                    </div>
                    </div>  
                    )}
                    <div className="cart-content">
                    <h3>
                        <img src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" />
                        Cart
                    </h3> 

                    <div className="cart-list" data-testid="cart">
                        {
                            products.length === 0 
                            ? 
                            <div className="empty-cart" data-testid="empty">
                                <p>There are no items in Cart, Please add items to checkout!!!</p>
                            </div> 
                            :
                            products.map(product => {
                                return (
                                    <CartItem 
                                        key={product.id} 
                                        product={product} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                    </div>

                    <div className="checkout-div" data-testid="checkout">
                        <div className="checkout">
                                <div className="subtotal-div">
                                    <p className="subtotal">SUBTOTAL</p>
                                    <p className="subtotal-price" data-testid="subtotal">₱ {sum.toFixed(2)}</p>
                                </div>
                                <button className="checkout-btn" data-testid="checkoutbtn" onClick={ sum > 0 && showCheckoutModal}>CHECKOUT</button>
                              { sum <= 0 && <p>Cart is empty! add items on the cart!</p>}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
        
    )
}

export default Cart;