import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNav = () => {
    return (
        <div className='bg-base-200 py-5 pb-16'>
            <footer className="footer footer-center text-base-content rounded p-10 lg:flex lg:justify-around">
                <nav className="grid grid-flow-col gap-4">
                     <NavLink to='/about'>About</NavLink>
                     <NavLink to='/skills'>Skills</NavLink>
                     <NavLink to='/demo'>Demo class</NavLink>
                     {/* <NavLink to='/journey'>Journey</NavLink> */}
                </nav>

                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a href="mailto:kamrunnesasamiya1997@gmail.com"> <i className="fa-solid fa-envelope" style={{ fontSize: '25px' }}></i></a>

                    <a href='https://github.com/samya87'> <i className="fa-brands fa-github" style={{ fontSize: '25px' }}></i>  </a>

                    <a href='https://www.linkedin.com/in/kamrunnesa-samiya-17745b18b/'> <i className="fa-brands fa-linkedin" style={{ fontSize: '25px' }}></i> </a>
                    </div>
                </nav>

                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </footer>
        </div>
    );
};

export default FooterNav;