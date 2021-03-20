import React from "react";
import customer1 from '../../assets/img/omnifood/customer-1.jpg';
import customer2 from '../../assets/img/omnifood/customer-2.jpg';
import customer3 from '../../assets/img/omnifood/customer-3.jpg';

const Testimonials = () => {

    return (
        <section className='bg-backCustomer bg-cover bg-fixed'>
            <div className='bg-black bg-opacity-75 p-4 sm:p-0'>

                <div className='max-w-1140 mx-auto'>
                    <h2 className='text-white pt-16 mb-8 text-3xl lg:text-4xl leading-tight font-light uppercase text-center'>Our
                        customers can't live without us</h2>
                    <div className='h-0.5 w-24 bg-orange mb-16 block mx-auto'> </div>
                </div>

                <div className='grid gap-36 lg:gap-12 grid-cols-1 lg:grid-cols-3 mx-auto max-w-1140 pb-24 text-white pt-10 px-4 lg:px-0'>

                    <blockquote style={{minHeight:'180px'}} className='italic text text-lg relative leading-relaxed lg:ml-4 xl:ml-0'>
                        <span className='inline text-7xl absolute -top-20 -left-3 lg:-left-5' >&#8220;</span>
                        pOmnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so
                        Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite className='mt-8 flex items-center '>
                            <img className='h-12 rounded-full mr-4' src={customer2} alt="customer 2 testimonials"/>
                            Alberto Duncan
                        </cite>
                    </blockquote>

                    <blockquote className='italic text text-lg relative leading-relaxed'>
                        <span className='inline text-7xl absolute -top-20 -left-3 lg:-left-5' >&#8220;</span>
                        Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                        <cite className='mt-8 flex items-center lg:absolute lg:bottom-0'>
                            <img className='h-12 rounded-full mr-4' src={customer3} alt="customer 3 testimonials"/>
                            Joana Silva
                        </cite>
                    </blockquote>

                    <blockquote className='italic text text-lg relative leading-relaxed'>
                        <span className='inline text-7xl absolute -top-20 -left-3 lg:-left-5' >&#8220;</span>
                        I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                        <cite className='mt-8 flex items-center lg:absolute lg:bottom-0'>
                            <img className='h-12 rounded-full mr-4' src={customer1} alt="customer 1 testimonials"/>
                            Milton Chapman
                        </cite>
                    </blockquote>

                </div>

            </div>
        </section>
    )
}

export default Testimonials;

// Section 5: Customer testimonials
// Title: Our customers can't live without us
//
//
// (Alberto Duncan)
//
//
//     ()
//
//
//     ()
