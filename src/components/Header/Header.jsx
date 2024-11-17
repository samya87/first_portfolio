import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const link = <>
        <li> <NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/about'>About</NavLink></li>
        <li> <NavLink to='/skills'>Skills</NavLink></li>
        <li> <NavLink to='/demo'>Demo class</NavLink></li>
        {/* <li> <NavLink to='/journey'>Journey</NavLink></li> */}
        <li> <NavLink to='/connect'>Connect</NavLink></li>
    </>

    return (
        <div className="sticky top-0 z-40 navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"> {link} </ul>
                </div>
                <div className="flex ml-5">
                    <a className="btn btn-ghost text-xl font-bold">Portfolio</a>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1"> {link}</ul>
            </div>
            <div className="navbar-end flex space-x-5 mr-5">
                
            </div>
        </div>
    );
};

export default Header;