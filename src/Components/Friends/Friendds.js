import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SFriend from './SFriend';

const Friendds = () => {
    const friends= useLoaderData();
    console.log(friends)
    return (
        <div className='friends'>
          
            {
                friends.map(friend=><SFriend
                key={friends.id}
                friend={friend}
                ></SFriend>)
            }
          
        </div>
    );
};

export default Friendds;