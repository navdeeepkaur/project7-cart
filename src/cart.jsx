import { useState, useEffect } from 'react';
import './cart.css';

export default function Cart(props){

    return(
        <div className="cart">
            <h1>CART</h1>
            <hr />
            {props.item.map(i=>(
                <div className="itemWrapper">
                    <div className="item">
                        <div className="photo">
                            <img src={i.image} alt="" />
                        </div>
                        <div className="content">
                            <div className="row">
                                <span className='name'>{i.name}</span>
                                <button className="delete" onClick={()=>props.delete(i.name)}><i className="fa-solid fa-xmark" style={{color:"#da1633"}}></i></button> 
                            </div>
                            <span className='price'>₹{i.price}</span>
                            <div className="row">
                                <div className='plus-minus'>
                                    <button onClick={()=>props.fnc(i, -1)}><i className="fa-solid fa-minus" style={{color:"#2f3641"}}></i></button>
                                    <span>{i.quantity}</span>
                                    <button onClick={()=>props.fnc(i, +1)}><i className="fa-solid fa-plus" style={{color:"#2f3641"}}></i></button>
                                </div>
                                <span className='total-item'>₹{i.price*i.quantity}</span>
                            </div>
                        </div>
                    </div>
                 <hr />
                </div>
            ))
            }
            <p className='total'>TOTAL: ₹{props.total}</p>
            <div className='checkout'>
            {
                props.length?<button onClick={()=>props.checkout()}>CHECKOUT</button>:<button className='checkout' disabled>CHECKOUT</button>
            }
            </div>
        </div>
    )
}