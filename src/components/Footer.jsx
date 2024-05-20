import React from 'react';
import github from '../assets/img/github.png';
import './Footer.css';

export const Footer = () => {
    return (
        <>
            <div className="footer container_footer">
                <p>Desing and Coded by</p>
                <div className="imagen">
                    <a href="https://github.com/eugeolmedo" target="_blank">Eugenia Olmedo
                    <img className='icono' src={github} alt="Github" /></a>
                    <a href="https://github.com/Ezequiel-Scheffer" target="_blank">Ezequiel Scheffer<img className='icono' src={github} alt="Github" /></a>
                    <a href="https://github.com/Dasr85" target="_blank">Daniel Solórzano<img className='icono' src={github} alt="Github" /></a>
                    <a href="https://github.com/LucianoCasais" target="_blank">Luciano Casais<img className='icono' src={github} alt="Github" /></a>
                    
                </div>
                <p className='copy'>© Copyright 2024. All rights reserved.</p>
            </div>
        </>
    );
};

