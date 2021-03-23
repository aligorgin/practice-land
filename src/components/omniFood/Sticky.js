import React from "react";
import Logo from "../../assets/img/omnifood/logo.png";

const Sticky = ()=>{
    return(
        <nav className='fixed hidden md:block top-0 left-0 w-full bg-white shadow-lg'>
            <div className='pl-6 w-full xl:pl-0 xl:max-w-1140 mx-auto'>
                <img className='h-14 w-auto float-left my-2' src={Logo} alt="omnifood logo"/>
                <ul className='float-right mt-5 md:pr-6 xl:pr-0'>
                    <li className='inline-block ml-10'><a className='pb-6 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange' href="#">Food delivery</a></li>
                    <li className='inline-block ml-10'><a className='pb-6 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange' href="#">How it works</a></li>
                    <li className='inline-block ml-10'><a className='pb-6 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange' href="#">Our cities</a></li>
                    <li className='inline-block ml-10'><a className='pb-6 text-black border-b-4 border-transparent transition-colors duration-300 uppercase text-lg hover:border-4 hover:border-orange' href="#">Sign up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Sticky;
