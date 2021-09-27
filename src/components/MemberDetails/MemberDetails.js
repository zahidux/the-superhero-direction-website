import React from 'react';
import './MemberDetails.css'

const MemberDetails = (props) => {
    const {name, img} = props.member;
    return (
        <div className="details_box">
            <div className="small_img">
                <img src={img} alt="member" />
            </div>
            <h5>{name}</h5>
        </div>
    );
};

export default MemberDetails;