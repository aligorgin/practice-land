import React from "react";
import whiteLogo from "../../assets/img/omnifood/logo-white.png";
import {Link} from 'react-scroll';


const Navigation = () => {
    return (
        <nav>
            <div className='pl-6 w-full xl:pl-0 xl:max-w-1140 mx-auto'>
                <img className='h-24 w-auto float-left mt-5' src={whiteLogo} alt="omnifood logo"/>
                <ul className='float-right mt-14 hidden md:block md:pr-6 xl:pr-0'>
                    <Link
                        to='featuresSection'
                        smooth={true}
                        spy={true}
                        duration={1000}
                    >
                        <li className='inline-block ml-10'><a
                            className='inline-block ml-10 py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange'
                            href="#">Food delivery</a>
                        </li>
                    </Link>

                    <Link
                        to='howItSection'
                        smooth={true}
                        spy={true}
                        duration={1000}
                    >
                        <li className='inline-block ml-10'><a
                            className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange'
                            href="#">How it works</a>
                        </li>

                    </Link>
                    <Link
                        to='citiesSection'
                        smooth={true}
                        spy={true}
                        duration={1000}
                    >
                        <li className='inline-block ml-10'><a
                            className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange'
                            href="#">Our cities</a>
                        </li>

                    </Link>
                    <Link
                        to='signUpSection'
                        smooth={true}
                        spy={true}
                        duration={1000}
                    >
                        <li className='inline-block ml-10'><a
                            className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange'
                            href="#">Sign up</a>
                        </li>

                    </Link>

                </ul>
            </div>
        </nav>
    )
}

export default Navigation;