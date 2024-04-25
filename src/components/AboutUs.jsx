import React from 'react'


function AboutUs() {
    return (
        <section className='body my-10'>
            
            <div className='flex flex-wrap-reverse max-sm:justify-center justify-between items-center max-sm:text-center'>
                <div>
                    <img src="./assets/others/chef.png" alt="" className='flex-1 max-sm:w-full max-sm:mt-4'/>
                </div>

                <span className='w-3/6 max-sm:w-full'>
                    <h1 className='font-bold text-3xl py-4'>Enjoy Our Delicious Set Menu Today !</h1>
                    <p className='pb-4'>
                        Indulge in Out carefully Curated Set menu that a perfect blend Of flavors and textures to tantalize your taste buds. Our set menu includes variety 01 dishes that are Sure to please every palate. savory starters to mouth-watering mains ana delectable desserts.
                    </p>
                    <p className='py-4'>
                    each dish is crafted using the finest ingredients ana cooked to, perfection by Our skilled chefs.
                    </p>
                    <a href="#categories"><button className='btn'>Order Now</button></a>
                </span>
                
            </div>

        </section>
    )
}

export default AboutUs