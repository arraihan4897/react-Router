import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <NavLink to='/home'className={({isActive})=>isActive ? 'Aactive':undefined}>Home</NavLink>
            <NavLink to='/about'className={({isActive})=>isActive ? 'Aactive':undefined}>About</NavLink>
            <NavLink to='/products'className={({isActive})=>isActive ? 'Aactive':undefined}>Products</NavLink>
            <NavLink to='/friends'className={({isActive})=>isActive ? 'Aactive':undefined}>Friends</NavLink>
        </div>
    );
};

export default Header;