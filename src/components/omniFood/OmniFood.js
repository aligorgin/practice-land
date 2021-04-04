import React,{useEffect} from 'react';
import Header from "./Header";
import Features from "./Features";
import MealsSection from "./MealsSection";
import HowItWorksSection from "./HowItWorksSections";
import Cities from "./Cities";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";
import Contact from "./Contact";
import Footer from "./Footer";

const OmniFood = () => {

    // useEffect(()=>{
    //
    // },[])
    document.title = 'Omnifood';
    console.log(document.link)

    return (
        <div className='bg-white s text-gray-800 font-openSans text-xl font-normal'>
            <Header/>
            <Features/>
            <MealsSection/>
            <HowItWorksSection/>
            <Cities/>
            <Testimonials/>
            <SignUp/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default OmniFood;