import React from "react";
import whiteLogo from "../../assets/img/omnifood/logo-white.png";

const Navigation =()=>{
    return(
        <nav>
            <div className='pl-6 w-full xl:pl-0 xl:max-w-1140 mx-auto'>
                <img className='h-24 w-auto float-left mt-5' src={whiteLogo} alt="omnifood logo"/>
                <ul className='float-right mt-14 hidden md:block md:pr-6 xl:pr-0'>
                    <li className='inline-block ml-10'><a className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange' href="#">Food delivery</a></li>
                    <li className='inline-block ml-10'><a className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange' href="#">How it works</a></li>
                    <li className='inline-block ml-10'><a className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange' href="#">Our cities</a></li>
                    <li className='inline-block ml-10'><a className='py-2 border-b-2 border-transparent transition-colors duration-300 text-white uppercase text-lg hover:border-2 hover:border-orange' href="#">Sign up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;