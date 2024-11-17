import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect( () => {
        fetch('skills.json')
        .then(res => res.json())
        .then(data => setSkills(data.skill));
    })
    return (
        <div>
            <h2 className='text-green-700 pt-10 pb-5 font-semibold text-2xl'>My Skills & Tools</h2>
            <p className='font-semibold'>Language </p>
            <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2'>
                {
                    skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)
                }
            </div>
{/* ---------------------------------------------- */}
            <h2 className='text-green-700 pt-10 pb-5 font-semibold text-2xl'>Sample Projects</h2>
            
            <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className="card bg-base-100 shadow-xl mb-10">
                <figure className="px-10 pt-10 ">
                    <img src="https://i.ibb.co.com/LPnL3Wk/tt-ss.png" alt="tt-ss" border="0" className='border-green-50 border-2 rounded-lg shadow-lg lg:h-[285px]'/>
                </figure>
                <div className="card-body items-center text-center">
                <p className='text-gray-500 text-sm'>A simple web project showing an e-learning platform</p>
                <a href="https://tech_talk_111.surge.sh/" className="btn btn-outline btn-success">View Project</a>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl mb-10">
                <figure className="px-10 pt-10 ">
                    <img src="https://i.ibb.co.com/BKCzsQk/pong-ball.png" alt="pong-ball" border="0" className='border-green-50 border-2 rounded-lg shadow-lg'/>
                </figure>
                <div className="card-body items-center text-center">
                    <p className='text-gray-500 text-sm'>A Pong ball game made with scratch</p>
                <a href="https://scratch.mit.edu/projects/1095254489" className="btn btn-outline btn-success">View Project</a>
                </div>
            </div>

            </div>

            
            <h2 className='text-green-700 pt-10 pb-5 font-semibold text-2xl'>Basic Skill Test Certificate</h2>
            <div className="card bg-base-100 shadow-xl mb-10 w-[200px] md:w-[500px] lg:w-[500px]">
                <figure className="px-10 pt-10 ">
                    <img src="https://i.ibb.co.com/MR1GbxM/hr-certificate.png" alt="hr-certificate" border="0" className='border-green-50 border-2 rounded-lg shadow-lg'/>
                </figure>
                <div className="card-body items-center text-center">
                <p className='text-gray-500 text-sm'>It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes</p>
                <a href="https://www.hackerrank.com/certificates/ca0b681b66ec" className="btn btn-outline btn-success">Click to see</a>
                </div>
            </div>
            <h2 className='text-green-700 pt-10 pb-5 font-semibold text-2xl'>Online Judges ID</h2>
            <div className='grid grid-cols-3 w-[500px] gap-5 pb-5'>
                <a href="https://leetcode.com/u/samiya87/" className="btn btn-outline">Leetcode ID</a>
                <a href="https://codeforces.com/profile/samiya87" className="btn btn-outline">Codeforces ID</a>
                <a href="https://vjudge.net/user/samiya87" className="btn btn-outline">Vjudge ID</a>
            </div>
        </div>
    );
};

export default Skills;