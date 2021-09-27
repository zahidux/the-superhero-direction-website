import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Member.css'

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
const Member = (props) => {
    const {name, age, salary, citizenship, role, img} = props.member;
    return (
        <div className="col-md-4">
            <div className="Member_box">
                <div className="image">
                    <img src={img} alt="Member" />
                </div>
                <h2>Name<span> : {name}</span></h2>
                <h3>Role<span> : {role}</span></h3>
                <h3>Age<span> : {age}</span></h3>
                <h3>Country<span> : {citizenship}</span></h3>
                <h3>Salary<span> : ${salary}</span></h3>
                <button
                onClick={() => props.handleAddToCard(props.member)}
                className="cart_btn"> {shoppingCart} Add To Cart</button>
            </div>
        </div>
    );
};

export default Member;