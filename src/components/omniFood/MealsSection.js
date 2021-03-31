import React from 'react';
import one from '../../assets/img/omnifood/1.jpg';
import two from '../../assets/img/omnifood/2.jpg';
import three from '../../assets/img/omnifood/3.jpg';
import four from '../../assets/img/omnifood/4.jpg';
import five from '../../assets/img/omnifood/5.jpg';
import six from '../../assets/img/omnifood/6.jpg';
import seven from '../../assets/img/omnifood/7.jpg';
import eight from '../../assets/img/omnifood/8.jpg';


const MealsSection =()=>{
    return(
        <section>
            <ul className='w-full'>
                <li className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={one} alt="Korean bibimbap with egg and vegetables"/>
                    </figure>
                </li>
                <li className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={two} alt="Simple italian pizza with cherry tomatoes"/>
                    </figure>
                </li>
                <li className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={three} alt="Chicken breast steak with vegetables"/>
                    </figure>
                </li>
                <li className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={four} alt="Autumn pumpkin soup"/>
                    </figure>
                </li>
            </ul>
            <ul className='w-full'>
                <li  className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={five} alt="Paleo beef steak with vegetables"/>
                    </figure>
                </li>
                <li  className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={six} alt="Healthy baguette with egg and vegetables"/>
                    </figure>
                </li>
                <li  className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={seven} alt="Burger with cheddar and bacon"/>
                    </figure>
                </li>
                <li  className='block float-left w-full sm:w-1/2 lg:w-1/4'>
                    <figure className='w-full overflow-hidden bg-black'>
                        <img className='w-full h-auto transform lg:scale-125 hover:scale-100 transition duration-500 lg:opacity-70 hover:opacity-100' src={eight} alt="Granola with cherries and strawberries"/>
                    </figure>
                </li>
                <div className='clear-both block h-0 invisible'>.</div>
            </ul>
        </section>
    )
}

export default MealsSection;