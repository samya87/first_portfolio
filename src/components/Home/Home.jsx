import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Demo from '../Demo/Demo';
import Journey from '../Journey/Journey';
import FooterNav from '../Footer/FooterNav';
import Connect from '../Connect/Connect';

const Home = () => {
    return (
        <div>
        <div className='px-9'>
            <About></About>
            <Skills></Skills>
            <Demo></Demo>
            {/* <Journey></Journey> */}
        </div>
        <FooterNav></FooterNav>
        </div>
    );
};

export default Home;