import React from 'react';

const Header = ()=>{
    return(
        <header className='bg-hero h-screen bg-cover bg-center bg-black bg-opacity-40 relative'>
            <div className='absolute inset-0 bg-black bg-opacity-70'>
                <div className='absolute w-1140 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1>Goodbye junk food. Hello super healthy meals.</h1>
                    <a href="#">I’m hungry</a>
                    <a href="#">Show me more</a>
                </div>
            </div>

        </header>
    )
}

export default Header;