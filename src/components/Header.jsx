//import './Header.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

export const Header = () => {
    return (
    <>
        <header className="flex flex-col   ">
        <div className="m-4 grid justify-items-center ">
            <img
            className="rounded  bg-red-200 m-4 justify-self-center p-2"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="logo"
            />
        </div>
        </header>
    </>
    );
};
