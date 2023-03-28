import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const SFriend = ({friend}) => {
    const {name,email,username,id}=friend
    return (
        <div className='friend'>
            <h5>NAME:{name}</h5>
            <p>Email:{email}</p>
            <p> <Link to={`/friend/${id}`}>{username}</Link></p>


            
        </div>
    );
};

export default SFriend;