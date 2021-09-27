import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';

const TeamMembers = () => {
    const [members, setMembers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('./apple-members.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    // cart handler
    const handleAddToCard = (member) =>{
        const newCart = [...cart, member];
        setCart(newCart);
    }
    return (
        <div className="members_container row">
                {/* members area */}
                <div className="row g-4 col-md-9">
                    {
                        members.map(member => <Member
                            key={member.key}
                            member={member}
                            handleAddToCard={handleAddToCard}
                            ></Member>)
                    }
                </div>

                {/* cart area */}
                <div className="cart_box col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default TeamMembers;