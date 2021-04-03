import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook, faGooglePlus, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    // gtr : detecting user's OS -> https://medium.com/@justenphelps/mobile-os-detection-1f14b46565cc

    let OSName = '';

    const detectingOs = () => {
        if (navigator.userAgent.indexOf('iPhone OS') !== -1) OSName = 'IOS';
        if (navigator.userAgent.indexOf('Android') !== -1) OSName = 'Android';
    }

    detectingOs();

    return (
        <footer className='bg-gray-800'>
            <div className='max-w-1140 mx-auto'>
                <div
                    className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 max-w-1140 mx-auto text-white py-14 px-4 lg:px-0 '>
                    <div className='col-span-2 xl:col-span-1'>
                        <ul className='flex mb-6 items-center justify-center md: lg:mb-0 lg:ml-6 '>
                            <li className=' text-base md:text-xl text-gray-500 hover:text-white transition duration-300'>
                                <a href="#">About us</a></li>
                            <li className='ml-8 text-base md:text-xl text-gray-500 hover:text-white transition duration-300'>
                                <a href="#">Blog</a></li>
                            <li className='ml-8 text-base md:text-xl text-gray-500 hover:text-white transition duration-300'>
                                <a href="#">Press</a></li>
                            <li className={`ml-8 text-base ${OSName === 'Android' ? 'hidden' : ''} md:text-xl text-gray-500 hover:text-white transition duration-300`}>
                                <a href="#">IOS App</a></li>
                            <li className={`ml-8 text-base ${OSName === 'IOS' ? 'hidden' : ''} md:text-xl text-gray-500 hover:text-white transition duration-300`}>
                                <a href="#">Android App</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex lg:float-right items-center justify-center lg:mr-9 xl:mr-0'>
                            <li className='text-2.5xl text-gray-500 hover:text-facebook transition duration-300'><a
                                href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li className='text-2.5xl ml-8 text-gray-500 hover:text-twitter transition duration-300'><a
                                href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li className='text-2.5xl ml-8 text-gray-500 hover:text-googlePlus transition duration-300'>
                                <a href="#"><FontAwesomeIcon icon={faGooglePlus}/></a></li>
                            <li className='text-2.5xl ml-8 text-gray-500 hover:text-instagram transition duration-300'>
                                <a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        </ul>
                    </div>
                </div>
                <p className='text-base lg:text-2xl text-center text-white pb-16 text-gray-500'>Copyright &copy; 2015 by
                    Omnifood. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;