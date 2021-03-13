import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook, faGooglePlus, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className='bg-gray-800'>
            <div className='max-w-1140 mx-auto'>
                <div className='grid grid-cols-2 max-w-1140 mx-auto text-white py-14'>
                    <div>
                        <ul className='flex'>
                            <li className='mr-8 text-gray-500 hover:text-white transition duration-300'><a href="#">About us</a></li>
                            <li className='mr-8 text-gray-500 hover:text-white transition duration-300'><a href="#">Blog</a></li>
                            <li className='mr-8 text-gray-500 hover:text-white transition duration-300'><a href="#">Press</a></li>
                            <li className='mr-8 text-gray-500 hover:text-white transition duration-300'><a href="#">IOS App</a></li>
                            <li className='text-gray-500 hover:text-white transition duration-300'><a href="#">Android App</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex float-right'>
                            <li style={{fontSize:"1.625rem"}} className= 'text-gray-500 hover:text-facebook transition duration-300'><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li style={{fontSize:"1.625rem"}} className='ml-8 text-gray-500 hover:text-twitter transition duration-300'><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li style={{fontSize:"1.625rem"}} className='ml-8 text-gray-500 hover:text-googlePlus transition duration-300'><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                            <li style={{fontSize:"1.625rem"}} className='ml-8 text-gray-500 hover:text-instagram transition duration-300'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
                <p className='text-center text-white pb-16 text-gray-500'>Copyright &copy; 2015 by Omnifood. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;