import React from 'react';
import Logo from '../../../public/images/logo.png';

export default function ApplicationLogo({ className }) {
    return (
        <img src={Logo} alt="Salubris Logo" className='w-40 h-14'/>
    );
}
