import React from 'react'
import HeroCard from './HeroCard'


function Hero() {

    

    return (
        <>
            <section className='body flex flex-wrap-reverse justify-between items-center  max-sm:block mt-20'>

                <div className='flex-1 h-fit mr-4'>
                    <h1 className='text-[#ff905d] text-2xl py-4'>Best Food in your town!</h1>
                    <p className='py-2'>
                    we believe that dining is not just about food, it's about creating amemorable experience, Our team of passionate chefs and hospitalityprofessionals strive to provide you with the best possible dining experience every time you visit us.
                    </p>

                    <button className='btn'>Order Now</button>
                    <span className='icon'><i className="bi bi-play-circle"></i></span>
                </div>

                <div className='flex-1 h-fit'>
                    <img src="./assets/others/chefs.png" alt="" />
                </div>
            </section>

            <section className=' bg-[#ffa37a] w-full'>
                <HeroCard />
            </section>
        </>
    )
}

export default Hero