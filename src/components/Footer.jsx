import React from 'react';
import github from '../assets/img/github.png';
import "./Footer.css";

export const Footer = () => {
    return (
        <>
            <div className="footer container_footer">
                <p>Desing and Coded by</p>
                <div className="imagen">
                    <a href="https://github.com/eugeolmedo" target="_blank">Eugenia Olmedo<img src={github} alt="Github" /></a>
                    <a href="https://github.com/Ezequiel-Scheffer" target="_blank">Ezequiel Scheffer<img src={github} alt="Github" /></a>
                    <a href="https://github.com/Dasr85" target="_blank">Daniel Solórzano<img src={github} alt="Github" /></a>
                    <a href="https://github.com/LucianoCasais" target="_blank">Lucioano Casais<img src={github} alt="Github" /></a>
                    
                </div>
                <p>© Copyright 2024.Todos los derechos reservados.</p>
            </div>
        </>
    );
};

