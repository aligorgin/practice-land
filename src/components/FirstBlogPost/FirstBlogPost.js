import React from "react";
import logo from '../../assets/img/logo.png';
import author from '../../assets/img/author.jpg';

const FirstBlogPost = () => {
    return (
        <div className='font-serif text-lg'>
            <div className='w-1140 mt-6 mx-auto'>
                <div className='w-3/4 float-left pr-8'>
                    <h1 className='text-5xl text-green-500 mb-5 font-semibold'>My first blog post</h1>
                    <h2 className='text-3xl text-green-500 mb-2'>this is my first blog post</h2>
                    <p className='mb-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto, asperiores cum deserunt
                        dolore dolores doloribus ea, eius eos esse est et exercitationem impedit ipsum iure maiores nihil
                        numquam obcaecati officiis quae quasi quisquam repellat, saepe ullam velit voluptate voluptates. Alias
                        animi consequatur consequuntur cumque distinctio, dolorum et fugit hic impedit laborum laudantium
                        maiores molestiae mollitia nostrum, placeat quidem quod sapiente sunt suscipit totam! Aut corporis nihil
                        recusandae sequi voluptate. Cumque perferendis possimus ullam? Accusantium aperiam architecto, cum
                        debitis dignissimos dolor earum exercitationem facere harum impedit ipsa ipsam laborum nisi officiis
                        possimus quam, ratione tempora temporibus tenetur voluptates. Ab animi architecto at ducimus, ea error
                        et facilis ipsam laudantium nobis, officia quia quo quod tempora voluptatum? Accusantium blanditiis
                        deleniti doloribus eius ipsum labore magnam minima modi molestiae, nam natus neque nisi nobis possimus
                        quis sed suscipit tenetur. Ad, deserunt facilis fugit maiores quo reiciendis sed totam! Ab adipisci
                        architecto dignissimos dolores ea eligendi explicabo laborum, maxime nulla officiis pariatur tempora
                        velit veniam! A eaque, necessitatibus non quae quis reiciendis. Consequatur earum enim inventore nihil
                        obcaecati. Accusamus aliquam dicta dolor fugit incidunt quaerat reiciendis rem repudiandae, tempora
                        unde. Ab atque autem, dicta error nam nulla numquam, placeat recusandae repellat, velit veniam!
                    </p>

                    <a className='hover:text-blue-500 ' href="https://www.udemy.com" target='_blank' rel="noopener noreferrer">link to udemy</a><br/>
                    <a className='hover:text-blue-500 ' href={logo} target='_blank' rel="noopener noreferrer">get the logo</a>

                    <h2 className='text-3xl text-green-500 mb-2'>html is amazing</h2>

                    <p className='mb-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur culpa, deleniti distinctio dolore
                        eos expedita harum, iusto, laudantium magnam mollitia nesciunt nobis odit quae quia quidem sequi sint
                        soluta ut voluptatem. Aliquam animi blanditiis cum doloribus est hic ipsum iusto necessitatibus nesciunt
                        soluta. Ad adipisci alias corporis cum delectus deserunt, dolor dolore doloremque eos est excepturi
                        explicabo facere ipsum laboriosam minima modi mollitia, natus necessitatibus odio placeat quam quasi
                        repudiandae rerum sequi sit ut vero voluptates. Dignissimos numquam obcaecati officia omnis, optio quo
                        rem sed similique ut! Aliquam animi aperiam aspernatur commodi cum dolore dolorem doloremque dolorum
                        eaque eos fugiat hic impedit ipsam itaque laborum, laudantium magnam maiores, minima molestiae odit
                        possimus quidem reprehenderit rerum saepe sapiente sed sit tenetur velit, vitae voluptatem! Beatae
                        consequuntur explicabo repellat. Aperiam eaque harum incidunt nesciunt nostrum officiis porro quibusdam
                        saepe. Distinctio, optio!</p>

                    <img className='h-36 w-auto mb-5' src={logo} alt="logo of css3 and html5"/>
                </div>

                <div className='w-1/4 float-left'>
                    <div className='mb-5'>
                        first post goues here
                    </div>
                    <div className='mb-5'>
                        2nd post goes here
                    </div>
                    <div className='mb-5'>
                        best post ever: read this shit
                    </div>
                </div>

                <div className='table clear-both'> </div>

                <div className='border-t border-gray-600 pt-5'>
                    <img className='rounded-full h-20 w-20 float-left' src={author} alt="author"/>
                    <p className='text-xl float-left mt-6 ml-5'>jackson gonzales</p>
                </div>

            </div>
        </div>
    )
}

export default FirstBlogPost;