import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useContext } from "react";
import './cart.css'

export const Cart = () => {
    const { addToCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    return (<div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
           {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0){
                return <CartItem data={product} /> 
            }
           })} 
        </div>
        <div className="checkout">
            <p> Subtotal: ${totalAmount}</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        </div>
)
}