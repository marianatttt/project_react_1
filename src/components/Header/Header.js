import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon,faSun,faUserCheck} from "@fortawesome/free-solid-svg-icons";



const Header = () => {
        const [theme, setTheme] = useState('light');

        useEffect(() => {
            const saveTheme = localStorage.getItem('theme');
            if (saveTheme) {
                setTheme(saveTheme);
                document.documentElement.setAttribute('data-theme', saveTheme);
            }
        }, []);

        const styleTheme = () => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        };


        return (
                <div className="header">
                    <div className="header-right">
                        <NavLink to={''}>Home</NavLink>
                        <NavLink to={'movie'}>Movies</NavLink>
                        <NavLink to={'genre'}>Genre</NavLink>
                        {/*<NavLink to={'person'}>Actors</NavLink>*/}
                        <NavLink to={'search/movie'}>Search</NavLink>
                    </div>
                    <div className="header-left">
                        <button className="button_icon"><FontAwesomeIcon className="icon" icon={faUserCheck} /></button>
                        <button className="button_icon" onClick={styleTheme}>
                        {theme === 'light' ? <FontAwesomeIcon className="icon" icon={faMoon}/> : <FontAwesomeIcon className="icon" icon={faSun}/>}
                    </button>
                    </div>
                </div>
 );
};

export {Header}























