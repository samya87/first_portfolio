import React from 'react';

const Skill = ({skill}) => {
    const {name, image} = skill;
    return (
        <div>
            <div className="card bg-base-100 w-32 shadow-xl mb-10">
                <figure className="px-10 pt-10 h-24">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Skill;