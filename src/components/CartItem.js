import React from 'react'

const CartItem = ({product, changeQuantity}) => {
    return (
        <div className="cart-item" data-testid="cartitem">
            <img src={product.img} alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{product.title}</p>
                    <span className="cart-item-price">₱ {product.price}</span>
                </div>
                <div>
                    <p className="item-quantity">Quantity: <span>{product.quantity}</span></p>
                    <div>
                     <button className="quantity-btn" data-testid ="minus"onClick={() => changeQuantity(product, '-')}>-</button>
                     <button className="quantity-btn" data-testid ="plus" onClick={() => changeQuantity(product, '+')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
