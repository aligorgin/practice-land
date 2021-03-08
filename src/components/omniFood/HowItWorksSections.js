import React from 'react';
import appIphone from '../../assets/img/omnifood/app-iPhone.png';
import downloadApp from '../../assets/img/omnifood/download-app.svg';
import androidApp from '../../assets/img/omnifood/download-app-android.png';

const HowItWorksSection = () => {
    return (
        <section className='py-20 bg-wickyWhite'>
            <div className='max-w-1140 mx-auto'>
                <h2 className='mb-8 text-center leading-tight text-4xl uppercase font-light'>How it works &mdash; Simple
                    as 1, 2, 3</h2>
                <div className='block h-0.5 bg-orange w-24 mx-auto mb-16'> </div>
            </div>
            <div className="grid grid-cols-2 gap-28 max-w-1140 mx-auto">

                <div>
                    <img className='w-5/12 float-right' src={appIphone} alt="omni food app on iphone"/>
                </div>

                <div className='mt-8'>
                    <div className='mb-12'>
                        <div className='text-orange border-2 border-solid border-orange inline-block rounded-full h-14 w-14 text-center p-2 float-left text-3xl mr-6' >1</div>
                        <p className='leading-normal'>Choose the subscription plan that best fits your needs and sign up today. </p>
                    </div>
                    <div className='mb-12'>
                        <div className='text-orange border-2 border-solid border-orange inline-block rounded-full h-14 w-14 text-center p-2 float-left text-3xl mr-6' >2</div>
                        <p className='leading-normal'>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                    </div>
                    <div className='mb-20'>
                        <div className='text-orange border-2 border-solid border-orange inline-block rounded-full h-14 w-14 text-center p-2 float-left text-3xl mr-6' >3</div>
                        <p className='leading-normal'>Enjoy your meal after less than 20 minutes. See you the next time! </p>
                    </div>

                    <a href="#">
                        <img className='h-12 w-auto mr-2.5 inline' src={downloadApp} alt="App Store button"/>
                    </a>
                    <a href="#">
                        <img className='h-12 w-auto mr-2.5 inline' src={androidApp} alt="play Store button"/>
                    </a>

                </div>

            </div>
        </section>
    )
}

export default HowItWorksSection;

