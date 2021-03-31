import React, {useState, useEffect} from "react";
import Logo from "../../assets/img/omnifood/logo.png";
import {Link} from 'react-scroll';

const Sticky = () => {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowScrollY, setWindowScrollY] = useState(window.scrollY);


    const handleResize = () => {
        setWindowHeight(window.innerHeight);
    };

    const handleScroll = () => {
        setWindowScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);


    const showingSticky = () => {
        if (windowScrollY > windowHeight) {
            return true;
        }
    }

    showingSticky();


    return (
        showingSticky() ?
            <nav className='fixed top-0 left-0 w-full bg-white shadow-lg z-50'>
                <div className='pl-6 w-full xl:pl-0 xl:max-w-1140 mx-auto'>
                    <a href="#"><img className='h-14 w-auto float-left my-2' src={Logo} alt="omnifood logo"/></a>
                    <ul className='hidden lg:inline float-right mt-6 md:pr-6 xl:pr-0'>
                        <Link
                            to='featuresSection'
                            smooth={true}
                            spy={true}
                            duration={1000}
                        >
                            <li className='inline-block ml-10'><a
                                className='pb-5 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange'
                                href="#">Food delivery</a></li>
                        </Link>
                        <Link
                            to='howItSection'
                            smooth={true}
                            spy={true}
                            duration={1000}
                        >
                            <li className='inline-block ml-10'><a
                                className='pb-5 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange'
                                href="#">How it works</a></li>
                        </Link>
                        <Link
                            to='citiesSection'
                            smooth={true}
                            spy={true}
                            duration={1000}
                        >
                            <li className='inline-block ml-10'><a
                                className='pb-5 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange'
                                href="#">Our cities</a></li>
                        </Link>
                        <Link
                            to='signUpSection'
                            smooth={true}
                            spy={true}
                            duration={1000}
                        >
                            <li className='inline-block ml-10'><a
                                className='pb-5 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange'
                                href="#">Sign up</a></li>
                        </Link>
                    </ul>
                </div>
            </nav>
            : null
    )
}

export default Sticky;
