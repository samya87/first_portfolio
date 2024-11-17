import React from 'react';

const Connect = () => {

    return (
        <div>
            <footer className="footer footer-center text-base-content rounded p-10">
            <h2 className='text-green-700 pt-10 pb-2 font-semibold text-2xl'>Connect with me</h2>
                <nav>
                    <div className="grid grid-flow-row gap-4">
                    <a href="mailto:kamrunnesasamiya1997@gmail.com" className='btn btn-outline'> <i className="fa-solid fa-envelope" style={{ fontSize: '25px' }}></i>Mail here</a>

                    <a href='https://github.com/samya87' className='btn btn-outline'>  <i className="fa-brands fa-github" style={{ fontSize: '25px' }}></i> Github </a>

                    <a href='https://www.linkedin.com/in/kamrunnesa-samiya-17745b18b/' className='btn btn-outline'> <i className="fa-brands fa-linkedin" style={{ fontSize: '25px' }}></i> LinkedIn </a>
                    </div>
                </nav>
                <aside>
                    
                </aside>
            </footer>
        </div>
    );
};

export default Connect;