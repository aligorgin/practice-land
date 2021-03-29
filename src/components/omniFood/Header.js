import React, {useState} from 'react';
import Navigation from "./Navigation";
import Sticky from "./Sticky";
import {Link} from 'react-scroll';


const Header = () => {

    const [red, setRed] = useState('text-white')

    const handleH1color = () => {
        setRed((prevState) => {
            if (prevState === 'text-white') {
                return 'text-orange';
            } else {
                return 'text-white';
            }
        })
    }


    return (
        <header className='bg-hero h-screen bg-cover bg-center bg-fixed relative '>
            <div className='absolute inset-0 bg-black bg-opacity-70'>
                <Navigation/>

                <div
                    className='absolute w-full px-6 xl:w-1140 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                    <h1 style={{wordSpacing: '4px'}}
                        className={`mb-5 leading-tight ${red} text-3xl md:text-4xl xl:text-5xl uppercase font-light tracking-wide`}
                        onClick={handleH1color}
                    >
                        Goodbye junk food. <br/>
                        Hello super healthy meals.
                    </h1>
                    <Link
                        to='signUpSection'
                        smooth={true}
                        spy={true}
                        duration={1000}
                    >
                        <a
                            className='mt-6 md:mt-0 mr-4 inline-block py-1.5 px-6 text-lg md:py-2.5 md:px-8 rounded-full border border-solid border-orange text-white font-light bg-orange hover:bg-Dorange hover:border-Dorange transition-colors duration-300 '
                            href="#signUp">
                            I’m hungry
                        </a>
                    </Link>
                    <Link
                        to='featuresSection'
                        smooth={true}
                        spy={true}
                        duration={1000}
                    >
                        <a
                            className='mt-6 md:mt-0 inline-block py-1.5 px-6 text-lg md:py-2.5 md:px-8 rounded-full border border-solid border-orange text-orange font-light hover:bg-Dorange hover:text-white hover:border-Dorange transition-colors duration-300 '
                            href="#features">
                            Show me more
                        </a>
                    </Link>

                </div>
            </div>
            <Sticky/>

        </header>
    )
}

export default Header;