import React from 'react';

const Contact = () => {
    return (
        <section className='my-16'>

            <div className='max-w-1140 mx-auto'>
                <h2 className='text-4xl uppercase font-light mb-8 text-center'>We're happy to hear from you</h2>
                <div className='h-0.5 w-24 mx-auto bg-orange mb-8'> </div>
            </div>

            <div className='max-w-1140 mx-auto'>
                <form method='post' action="#" className='w-3/5 mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 max-w-1140 mx-auto gap-y-7'>

                        <div >
                            <label htmlFor="Name">Name</label>
                        </div>

                        <div className='col-span-2'>
                            <input className='border w-full p-1 rounded-lg focus:outline-none' type="text" id='Name' required placeholder='Your name' name='name'/>
                        </div>

                        <div >
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className='col-span-2'>
                            <input className='border w-full p-1 rounded-lg focus:outline-none' type="email" id='email' required placeholder='Your email' name='email'/>
                        </div>

                        <div >
                            <label htmlFor="find-us">How did you find us?</label>
                        </div>

                        <div className='col-span-2'>
                            <select className='border w-full p-1 rounded-lg focus:outline-none' name="find-us" id="find-us">
                                <option value="friends" selected>Friends</option>
                                <option value="search engine">Search engine</option>
                                <option value="ad">Advertisement</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div >
                            <label htmlFor="news">Newsletter?</label>
                        </div>

                        <div className='col-span-2'>
                            <input className='my-2.5 mr-1 ml-0 focus:outline-none' type="checkbox" id='news' name='news'/> Yes, please
                        </div>

                        <div >
                            <label htmlFor="message">Drop us a line</label>
                        </div>

                        <div className='col-span-2'>
                            <textarea className='border w-full p-1 rounded-lg h-24 focus:outline-none' placeholder='Your message' name="message" id="message"/>
                        </div>

                        <div >
                            <label>&nbsp;</label>
                        </div>

                        <div className='col-span-2'>
                            <input
                                className='mr-4 inline-block py-2.5 px-8 rounded-full border border-solid border-orange text-white font-light bg-orange hover:bg-Dorange hover:border-Dorange transition-colors duration-300 '
                                type="submit" value='Send'/>
                        </div>

                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact;
