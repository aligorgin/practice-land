import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";


const SignUp = () => {

    const [windowWidth, setWidnowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidnowWidth(window.innerWidth);
        });


        return () => {
            window.removeEventListener('resize', () => {
                setWidnowWidth(window.innerWidth);
            })
        };


    }, []);

    return (
        <section className='py-16 bg-wickyWhite' id='signUpSection'>

            <div className='max-w-1140 mx-auto'>
                <h2 className='text-4xl md:text-5xl leading-tight font-light mb-8 text-center'>Start eating healthy
                    today</h2>
                <div className='mx-auto h-0.5 w-24 bg-orange mb-16'></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12  max-w-1140 mx-auto'>

                <div
                    data-aos={`${windowWidth <1024?'fade-down':''}`}
                    className='mb-4 mx-4 sm:w-8/12 sm:mx-auto lg:w-auto lg:mx-0 rounded-lg shadow-lg bg-white divide-y divide-gray-300 lg:transform hover:scale-110 transition duration-100'>
                    <div className='p-4 bg-wickyyWhite'>
                        <h3 className='text-2xl xl:text-2.5xl mb-7 uppercase '>Premium</h3>
                        <p className='text-6xl xl:text-7xl font-lato text-orange mb-5'> $399 <span
                            className='text-lg xl:text-xl font-openSans'>/ per month</span></p>
                        <p className='text-base xl:text-lg'> That’s only 13.30$ per meal</p>
                    </div>
                    <div className='p-5'>
                        <ul className='text-lg xl:text-xl'>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>1 meal
                                every day
                            </li>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Order
                                24/7
                            </li>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Access to
                                newest creations
                            </li>
                            <li><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Free delivery</li>
                        </ul>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <a
                            className='mr-4 inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-white font-light bg-orange hover:bg-Dorange hover:border-Dorange transition-colors duration-300 '
                            href="#">
                            Sign Up now
                        </a>
                    </div>
                </div>
                <div
                    data-aos={`${windowWidth<1024?'':'slide-left'}`}
                    className='mb-4 mx-4 sm:w-8/12 sm:mx-auto lg:w-auto lg:mx-0 rounded-lg shadow-lg bg-white divide-y divide-gray-300 lg:transform '>
                    <div className='p-4 bg-wickyyWhite'>
                        <h3 className='text-2xl xl:text-2.5xl mb-7 uppercase '>Pro</h3>
                        <p className='text-6xl xl:text-7xl font-lato text-orange mb-5'> $149 <span
                            className='text-lg xl:text-xl font-openSans'>/ per month</span></p>
                        <p className='text-base xl:text-lg'>That’s only 14.90$ per meal</p>
                    </div>
                    <div className='p-5'>
                        <ul className='text-lg xl:text-xl'>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>1 meal 10
                                days/month
                            </li>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Order
                                24/7
                            </li>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Access to
                                newest creations
                            </li>
                            <li><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Free delivery</li>
                        </ul>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <a
                            className='inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-orange font-light hover:bg-Dorange hover:text-white hover:border-Dorange transition-colors duration-300 '
                            href="#">
                            Sign Up now
                        </a>
                    </div>
                </div>
                <div
                    data-aos={`${windowWidth<1024?'':'slide-left'}`}
                    className='mb-4 mx-4 sm:w-8/12 sm:mx-auto lg:w-auto lg:mx-0 rounded-lg shadow-lg bg-white divide-y divide-gray-300 lg:transform '>
                    <div className='p-4 bg-wickyyWhite'>
                        <h3 className='text-2xl xl:text-2.5xl mb-7 uppercase '>starter</h3>
                        <p className='text-6xl xl:text-7xl font-lato text-orange mb-5'> $19 <span
                            className='text-lg xl:text-xl font-openSans'>/ per month</span></p>
                        <p className='text-base xl:text-lg invisible'> That’s only 13.30$ per meal</p>
                    </div>
                    <div className='p-5'>
                        <ul className='text-lg xl:text-xl'>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>1 meal
                            </li>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Order
                                from 8 am to 12 pm
                            </li>
                            <li className='mb-3'><FontAwesomeIcon className='text-orange mr-3' icon={faTimes}/></li>
                            <li><FontAwesomeIcon className='text-orange mr-3' icon={faCheck}/>Free delivery</li>
                        </ul>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <a
                            className='inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-orange font-light hover:bg-Dorange hover:text-white hover:border-Dorange transition-colors duration-300 '
                            href="#">
                            Sign Up now
                        </a>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default SignUp;


<a
    className='inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-orange font-light hover:bg-Dorange hover:text-white hover:border-Dorange transition-colors duration-300 '
    href="#">
    Sign Up now
</a>

//
//
// Plan 2: Pro
// 149$ per month
// That’s only 14.90$ per meal
//
// Order 24/7
// Access to newest creations
// Free delivery
//
//
// Plan 3: Starter
// $ per meal
// 1 meal
//
// Free delivery
