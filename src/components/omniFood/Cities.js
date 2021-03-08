import React from 'react';
import london from '../../assets/img/omnifood/london.jpg';
import berlin from '../../assets/img/omnifood/berlin.jpg';
import lisbon from '../../assets/img/omnifood/lisbon-3.jpg';
import san from '../../assets/img/omnifood/san-francisco.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faStar,} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const Cities = () => {
    return (
        <section className='my-20'>

            <div className='max-w-1140 mx-auto'>
                <h2 className='mb-8 text-center leading-tight text-4xl uppercase font-light'>We're currently in these
                    cities</h2>
                <div className='block h-0.5 bg-orange w-24 mx-auto mb-16'> </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 max-w-1140 mx-auto gap-12'>

                <div>
                    <img className='w-96 h-auto mb-5' src={lisbon} alt="lisbon"/>
                    <h3 style={{fontSize:"1.576rem"}} className='font-light uppercase mb-5'>Lisbon</h3>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faUser}/>
                        <p className=''>1600+ happy eaters</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faStar}/>
                        <p>60+ top chefs</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faTwitter}/>
                        <a className='text-orange border-b-2 border-orange hover:border-opacity-0 hover:text-black transition duration-300' href="#">@omnifood_lx</a>
                    </div>
                </div>

                <div>
                    <img className='w-96 h-auto mb-5' src={san} alt="San Francisco"/>
                    <h3 style={{fontSize:"1.576rem"}} className='font-light uppercase mb-5'>San Francisco</h3>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faUser}/>
                        <p className=''>3700+ happy eaters</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faStar}/>
                        <p>160+ top chefs</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faTwitter}/>
                        <a className='text-orange border-b-2 border-orange hover:border-opacity-0 hover:text-black transition duration-300' href="#">@omnifood_sf</a>
                    </div>
                </div>

                <div>
                    <img className='w-96 h-auto mb-5' src={berlin} alt="Berlin"/>
                    <h3 style={{fontSize:"1.576rem"}} className='font-light uppercase mb-5'>Berlin</h3>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faUser}/>
                        <p className=''>2300+ happy eaters</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faStar}/>
                        <p>110+ top chefs</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faTwitter}/>
                        <a className='text-orange border-b-2 border-orange hover:border-opacity-0 hover:text-black transition duration-300' href="#">@omnifood_berlin</a>
                    </div>
                </div>

                <div>
                    <img className='w-96 h-auto mb-5' src={london} alt="london"/>
                    <h3 style={{fontSize:"1.576rem"}} className='font-light uppercase mb-5'>London</h3>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faUser}/>
                        <p className=''>1200+ happy eaters</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faStar}/>
                        <p>50+ top chefs</p>
                    </div>
                    <div className='flex mb-1.5'>
                        <FontAwesomeIcon className='text-orange mr-5 ml-2 mt-1' icon={faTwitter}/>
                        <a className='text-orange border-b-2 border-orange hover:border-opacity-0 hover:text-black transition duration-300' href="#">@omnifood_london</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Cities;
