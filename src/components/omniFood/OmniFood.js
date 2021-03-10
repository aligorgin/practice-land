import React from 'react';
import Header from "./Header";
import Features from "./Features";
import MealsSection from "./MealsSection";
import HowItWorksSection from "./HowItWorksSections";
import Cities from "./Cities";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";

const OmniFood = ()=>{
    return(
        <div className='bg-white text-gray-800 font-openSans text-xl font-normal'>
            <Header/>
            <Features/>
            <MealsSection/>
            <HowItWorksSection/>
            <Cities/>
            <Testimonials/>
            <SignUp/>
        </div>
    )
}

export default OmniFood;