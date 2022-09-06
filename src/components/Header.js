import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import Order from './Order';

const showOders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return(<div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className='sum'>Total: {new Intl.NumberFormat().format(sum)}$</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Cart is empty</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'></span>
            <AiOutlineShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>



            <BiDollar className='dollar'/>
            <ul className='nav'>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
            </ul>

            {cartOpen && (
                <div className='shop-cart'>
                    {props.orders.length > 0 ?
                        showOders(props) : showNothing()}
                </div>
            )}


        </div>
        <div className='presentation'></div>
    </header>
  )
}
