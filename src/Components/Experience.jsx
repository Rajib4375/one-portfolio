import React from 'react';
import html from '../assets/HTML.png';
import css from '../assets/css.png';
import javaScript from '../assets/javaScript.png';
import react from '../assets/react.png';
import monogoDB from '../assets/mongoDB.webp';
import firebase from '../assets/firebase.png';
import talwiend from '../assets/talwiend.webp';




const Experience = () => {

    const logos = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: monogoDB,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: talwiend,
            title: 'Talwind css',
            style: 'shadow-sky-400'
        }
    ]


    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
           <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6 '>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    logos.map(({id, src, title, style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto rounded-xl' />
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
               
            </div>
           </div>
        </div>
    );
};

export default Experience;