import React from 'react';
import appIphone from '../../assets/img/omnifood/app-iPhone.png';
import downloadApp from '../../assets/img/omnifood/download-app.svg';
import androidApp from '../../assets/img/omnifood/download-app-android.png';

const HowItWorksSection = ()=>{
    return(
        <section>
            <div className='max-w-1140 mx-auto'>
                <h2>How it works &mdash; Simple as 1, 2, 3</h2>
            </div>
            <div className='max-w-1140 mx-auto'>
                <div className='gird grid-cols-2'>

                    <div className='float-left'>
                        <img src={appIphone} alt="omni food app on iphone"/>
                    </div>

                    <div>
                        
                        <div>
                            <div >1</div>
                            <p>Choose the subscription plan that best fits your needs and sign up today. </p>
                        </div>
                        <div>
                            <div >2</div>
                            <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                        </div>
                        <div>
                            <div >3</div>
                            <p>Enjoy your meal after less than 20 minutes. See you the next time! </p>
                        </div>

                        <a href="#">
                            <img src={downloadApp} alt="App Store button"/>
                        </a>
                        <a href="#">
                            <img src={androidApp} alt="play Store button"/>
                        </a>
                        
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HowItWorksSection;
