import React ,{useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfinity, faClock, faCarrot, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Features = () => {

    return (
        <section className='py-20' id='featuresSection' >
            <div className='max-w-1140 mx-auto'>
                <h2 className='mb-8 text-center leading-tight text-4xl uppercase font-light px-6 xl:px-0'>
                    Get food fast <span className='hidden md:inline'>&mdash;</span> <br className='md:hidden'/> not fast food.
                </h2>
                <div className='block h-0.5 bg-orange w-24 mx-auto mb-8'/>
                <p className='text-center lg;w-10/12 lg:mx-auto lg:text-2xl leading-relaxed mb-10'>
                    Hello, we’re Omnifood, your new premium food delivery service.We know you’re always busy. No time
                    for
                    cooking. So let us take care of that, we’re really good at it, we promise!
                </p>
            </div>

            <div className='max-w-1140 mx-auto'>
                <div className='grid grid-cols-1 px-6 xl:px-0 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='p-3'>
                        <FontAwesomeIcon className='text-6xl block text-orange mb-2.5' icon={faInfinity}/>
                        <h3 className='font-light uppercase text-2xl mb-4'>Up to 365 days/year</h3>
                        <p className='text-lg leading-relaxed mb5'>Never cook again! We really mean that. Our subscription plans include up to 365 days/year
                            coverage. You can also choose to order more flexibly if that's your style.</p>
                    </div>
                    <div className='p-3'>
                        <FontAwesomeIcon className='text-6xl block text-orange mb-2.5' icon={faClock}/>
                        <h3 className='font-light uppercase text-2xl mb-4'>Ready in 20 minutes</h3>
                        <p className='text-lg leading-relaxed'>You're only twenty minutes away from your delicious and super healthy meals delivered right
                            to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                    </div>
                    <div className='p-3'>
                        <FontAwesomeIcon className='text-6xl block text-orange mb-2.5' icon={faCarrot}/>
                        <h3 className='font-light uppercase text-2xl mb-4'>100% organic</h3>
                        <p className='text-lg leading-relaxed'>All our vegetables are fresh, organic and local. Animals are raised without added hormones or
                            antibiotics. Good for your health, the environment, and it also tastes better!</p>
                    </div>
                    <div className='p-3'>
                        <FontAwesomeIcon className='text-5xl block text-orange mb-5' icon={faShoppingCart}/>
                        <h3 className='font-light uppercase text-2xl mb-4'>Order anything</h3>
                        <p className='text-lg leading-relaxed'> We don't limit your creativity, which means you can order whatever you feel like. You can
                            also choose from our menu containing over 100 delicious meals. It's up to you!</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Features;
