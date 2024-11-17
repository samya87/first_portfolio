import React from 'react';

const Demo = () => {
    return (
        <div>
            <h2 className='text-green-700 pt-10 pb-5 font-semibold text-2xl'>Demo Video</h2>
            <div className="card bg-base-100 shadow-xl mb-10">
                <figure className="px-10 pt-10 ">
                    <img src="https://i.ibb.co.com/WsM7mmq/demo.png" alt="demo" border="0" className='border-green-50 border-2 rounded-lg shadow-lg lg:h-[300px]'/>
                </figure>
                <div className="card-body items-center text-center">
                <p className='text-gray-500 text-sm'>A demo class on 'Loop' with Python</p>
                <a href="https://screenrec.com/share/8wpxUMQyZ0" className="btn btn-outline btn-success">Click Here</a>
                </div>
            </div>
        </div>
    );
};

export default Demo;