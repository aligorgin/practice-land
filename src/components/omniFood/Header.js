import React from 'react';

const Header = () => {
    return (
        <header className='bg-hero h-screen bg-cover bg-center bg-black bg-opacity-40 relative'>
            <div className='absolute inset-0 bg-black bg-opacity-70'>
                <div className='absolute w-1140 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 style={{wordSpacing: '4px'}}
                        className='mb-5 leading-tight text-white text-5xl uppercase font-light tracking-wide wordspacing'>
                        Goodbye junk food. <br/>
                        Hello super healthy meals.
                    </h1>
                    <a
                        className='mr-4 inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-white font-light bg-orange hover:bg-Dorange hover:border-Dorange transition-colors duration-300 '
                        href="#">
                        I’m hungry
                    </a>
                    <a
                        className='inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-orange font-light hover:bg-Dorange hover:text-white hover:border-Dorange transition-colors duration-300 '
                        href="#">
                        Show me more
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header;