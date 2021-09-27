import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import MemberDetails from '../MemberDetails/MemberDetails';


const user = <FontAwesomeIcon icon={faUser} />

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let total = 0
    for(const member of cart){
        console.log(member)
        total = total + member.salary;
    }

    return (
        <div id="cart_box">
            {/* cart calculation */}
            <div className="cart_details">
                <h5> {user} Member Added : {props.cart.length}</h5>
                <h5>Total Salary : ${total}</h5>
            </div>
            {/* member short details */}
            <div>
                {
                   cart.map(member => <MemberDetails
                    key={member.key}
                    member={member}
                    ></MemberDetails>) 
                }
                
                <button className="cart_btn">Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;