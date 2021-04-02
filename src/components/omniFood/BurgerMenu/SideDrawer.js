import React,{useState,useEffect} from "react";
import {Link} from "react-scroll";

const SideDrawer = ({click})=>{
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize',()=>{setHeight(window.innerHeight)})

        return()=>{
            window.removeEventListener('resize',()=>{setHeight(window.innerHeight)})
        }
    },[]);
    console.log('height',height)

    // style={{height:`${height}px`}}
    return(
        <nav className={`fixed lg:hidden h-full bg-red-50 shadow-md top-0 right-0 w-2/3 z-40 transform transition duration-500 ${click ? 'translate-x-0 ease-in' : 'translate-x-full ease-out'}`}>
            <ul className='flex flex-col items-center'>
                <Link
                    to='featuresSection'
                    smooth={true}
                    spy={true}
                    duration={1000}
                >
                    <li className={`mt-36 transition transform duration-200 ${click ? 'translate-x-0 ease-in' : 'translate-x-96 ease-out'}`}><a
                        className='text-black duration-300 uppercase text-xl md:text-2xl'
                        href="#">Food delivery</a></li>
                </Link>
                <Link
                    to='howItSection'
                    smooth={true}
                    spy={true}
                    duration={1000}
                >
                    <li className={`mt-10 transition transform duration-500 ${click ? 'translate-x-0 ease-in' : 'translate-x-96 ease-out'}`}><a
                        style={{transitionDuration:"5000ms"}}
                        className='text-black duration-300 uppercase text-xl md:text-2xl '
                        href="#">How it works</a></li>
                </Link>
                <Link
                    to='citiesSection'
                    smooth={true}
                    spy={true}
                    duration={1000}
                >
                    <li className={`mt-10 transition transform duration-700 ${click ? 'translate-x-0 ease-in' : 'translate-x-96 ease-out'}`}><a
                        className='text-black duration-300 uppercase text-xl md:text-2xl '
                        href="#">Our cities</a></li>
                </Link>
                <Link
                    to='signUpSection'
                    smooth={true}
                    spy={true}
                    duration={1000}
                >
                    <li className={`mt-10 transition transform duration-1000 ${click ? 'translate-x-0 ease-in' : 'translate-x-96 ease-out'}`}><a
                        className='text-black duration-300 uppercase text-xl md:text-2xl '
                        href="#">Sign up</a></li>
                </Link>
            </ul>
            <div className='flex justify-center '>
                <p className='absolute bottom-4 text-base text-center text-white text-gray-500'>Copyright &copy; 2015 by Omnifood. <br className='block sm:hidden'/> All rights reserved</p>
            </div>
        </nav>
    )
}

export default SideDrawer;