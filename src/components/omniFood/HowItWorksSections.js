import React from 'react';
import appIphone from '../../assets/img/omnifood/app-iPhone.png';
import downloadApp from '../../assets/img/omnifood/download-app.svg';
import androidApp from '../../assets/img/omnifood/download-app-android.png';

const HowItWorksSection = () => {

    let OSName = '';

    const detectingOs = () => {
        if (navigator.userAgent.indexOf('iPhone OS') !== -1) OSName = 'IOS';
        if (navigator.userAgent.indexOf('Android') !== -1) OSName = 'Android';
        if (navigator.userAgent.indexOf('iPad') !== -1) OSName = 'iPad';
    }

    detectingOs();

    return (
        <section className='py-20 bg-wickyWhite' id='howItSection'>
            <div className='max-w-1140 mx-auto'>
                <h2 className='mb-8 text-center leading-tight text-3xl lg:text-4xl uppercase font-light'>How it
                    works &mdash; Simple
                    as 1, 2, 3</h2>
                <div className='block h-0.5 bg-orange w-24 mx-auto mb-16'></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 max-w-1140 mx-auto">

                <div data-aos='fade-right' className='flex justify-center items-center md:block'>
                    <img className='w-5/12 md:float-right' src={appIphone} alt="omni food app on iphone"/>
                </div>

                <div className='mt-8 ml-6 md:ml-0'>
                    <div className='mb-12'>
                        <div
                            className='text-orange border-2 border-solid border-orange inline-block rounded-full h-10 w-10 text-xl  lg:h-14 lg:w-14 text-center p-1 float-left lg:text-3xl mr-6'>1
                        </div>
                        <p className='overflow-hidden text-xl leading-normal pr-3'>Choose the subscription plan that
                            best fits your needs and sign up today. </p>
                    </div>
                    <div className='mb-12'>
                        <div
                            className='text-orange border-2 border-solid border-orange inline-block rounded-full h-10 w-10 text-xl  lg:h-14 lg:w-14 text-center p-1 float-left lg:text-3xl mr-6'>2
                        </div>
                        <p className='overflow-hidden text-xl leading-normal pr-3'>Order your delicious meal using our
                            mobile app or website. Or you can even call us!</p>
                    </div>
                    <div className='mb-20'>
                        <div
                            className='text-orange border-2 border-solid border-orange inline-block rounded-full h-10 w-10 text-xl  lg:h-14 lg:w-14 text-center p-1 float-left lg:text-3xl mr-6'>3
                        </div>
                        <p className='overflow-hidden text-xl leading-normal pr-3'>Enjoy your meal after less than 20
                            minutes. See you the next time! </p>
                    </div>
                    <div className='text-center md:text-left'>
                        <a href="#" className={`${OSName === 'Android' ? 'hidden' : ''}`}>
                            <img
                                className={`h-${OSName === 'IOS' || OSName === 'Android' || OSName === 'iPad' ? '16' : '12'} w-auto mr-2.5 inline-block mx-auto`}
                                src={downloadApp}
                                alt="App Store button"/>
                        </a>
                        <a href="#" className={`${OSName === 'IOS' || OSName === 'iPad' ? 'hidden' : ''}`}>
                            <img
                                className={`h-${OSName === 'IOS' || OSName === 'Android' || OSName === 'iPad' ? '16' : '12'} w-auto mr-2.5 inline-block mx-auto`}
                                src={androidApp}
                                alt="play Store button"/>
                        </a>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default HowItWorksSection;

