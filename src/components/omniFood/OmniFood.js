import React from 'react';
import Header from "./Header";
import Features from "./Features";
import MealsSection from "./MealsSection";

const OmniFood = ()=>{
    return(
        <div className='bg-white text-gray-800 font-openSans text-xl font-normal'>
            <Header/>
            <Features/>
            <MealsSection/>
        </div>
    )
}

export default OmniFood;