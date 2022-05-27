import React from 'react';
import img from '../../Assets/My image.jpg';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import s1 from '../../Assets/Screenshot_4.png'
import s2 from '../../Assets/Screenshot_5.png'
import s3 from '../../Assets/Screenshot_6.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='px-20'>
            <h1 className='text-center text-4xl text-white my-8'>My Portfolio</h1>
            <div>
                <div class="hero py-8 bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse px-10 lg:justify-between">
                        <img className='w-64' src={img} />
                        <div className='pr-32'>
                            <h1 class="text-5xl font-bold">Md Shahriur Ahmed</h1>
                            <h3 className='text-3xl text-primary font-medium font-mono'>Web Developer</h3>

                            <h3 className='mt-3 text-2xl font-medium'><span className='text-primary mr-4'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>shahriurahmed914@gmail.com</h3>


                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20 py-8 bg-base-200'>
                <h1 className='text-3xl font-medium mb-2'>Career Objective</h1>
                <p className='text-justify mb-5'>To build in appropriate learning and shine in through hard work and commitment to the responsibilities have the opportunity to others that I have learned & to learn from the experiences of others.  Looking for A knowledge-sharing environment to develop my skill, interest in new technologies, and represent me by my skill. I Want to be a Full Stack Developer. Obtain a challenging position in an organization where my skills will greatly enhance its success as well as personal growth. </p>
                <h1 className='text-3xl font-medium mb-2'>Educational Qualification</h1>
                <p className='text-justify mb-5'>Program : Bachelor of Science in CSE <br />
                    Institute Name : Bangladesh University of Business and Technology (BUBT)
                    <br />
                    CGPA: 3.87
                    <br />
                    Passing Year : 2022</p>
                <h1 className='text-3xl font-medium mb-2'>Language Skill</h1>
                <p className='text-justify mb-5'>Good command over English and colloquial Bengali.</p>
                <h1 className='text-3xl font-medium mb-2'>Professional Skills:</h1>

                <li>Full-Stack web developer (MERN)
                    Front-End-Technologies: HTML5, CSS3, Bootstrap5, Tailwind, JavaScript, ES6, React, React-router, React-hook, Context-Api, etc.

                </li>
                <li> 	Using development Tools: GitHub, VS code, Visual Studio, Chrome Dev Tools, Figma, Netlify, Heroku
                </li>
                <li> 	Comfortable with Node js, MongoDB, Firebase, Material UI, Daisy UI, Express js, MySQL.
                </li>
                <li>
                    Team Leader, Project Management, Team Work, Organizing Event.

                </li>
                <li> Capable of working in a team as well as independently.
                </li>
                <li> Strong communication and interpersonal skills.
                </li>
                <li>
                    Able to work under pressure.
                </li>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                    <div className='mt-10 shadow-lg p-5'>
                        <h1 className='text-center text-3xl font-bold mb-5'>Project 1</h1>
                        <img className=' mb-5 ' src={s1} alt="" />
                        <div className='flex justify-center'><a className='px-8 bg-primary font-bold text-white  rounded-md py-2' href="https://dream-pictures.web.app/" target='_blank' rel='noreferrer'>Live Site</a></div>
                    </div>
                    <div className='mt-10 shadow-lg p-5'>
                        <h1 className='text-center text-3xl font-bold mb-5'>Project 2</h1>
                        <img className='mb-5 ' src={s2} alt="" />
                        <div className='flex justify-center'><a className='px-8 bg-primary font-bold text-white  rounded-md py-2' href="https://electro-point.web.app/" target='_blank' rel='noreferrer'>Live Site</a></div>
                    </div>
                    <div className='mt-10 shadow-lg p-5'>
                        <h1 className='text-center text-3xl font-bold mb-5'>Project 1</h1>
                        <img className='mb-5 ' src={s3} alt="" />
                        <div className='flex justify-center'><a className='px-8 bg-primary font-bold text-white  rounded-md py-2' href="https://fruitflowers.netlify.app/" target='_blank' rel='noreferrer'>Live Site</a></div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default MyPortfolio;