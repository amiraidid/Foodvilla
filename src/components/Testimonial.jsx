import React, { useState } from 'react'

function Testimonial() {
    
    const testimonials = [
        {id:1, name: "Maria John", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perferendis?", profile: "./assets/pexels-bankole-adeoni-4401280.jpg", image: "./assets/cake/food_18.png"},
        {id:2, name: "Ashly David", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perferendis?", profile: "./assets/pexels-mari-korz-10112345.jpg", image: "./assets/pasta/food_29.png"},
        {id:3, name: "Balle Akter", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perferendis?", profile: "./assets/pexels-mihman-duğanlı-20532916.jpg", image: "./assets/sandwich/food_15.png"}
    ]

    const [currentIndex, setCurrentIndex] = useState(1);

    function handleArrow() {
        setCurrentIndex(current => current + 1)
        if (currentIndex >= testimonials.length) {
            setCurrentIndex(1);
        }
    }


    return (
        <section className='body my-[5rem]'>
            <h1 className='text-center text-4xl py-6'>What People Says About Us</h1>
            <div className='flex justify-center items-center gap-4'>
                <button onClick={handleArrow}><i className="bi bi-arrow-left-short text-2xl"></i></button>
                {
                    testimonials.map(testimonial => (
                        <div key={testimonial.id} className={`${testimonial.id === currentIndex ? 'flex' : 'hidden'} flex justify-center items-center card-shadow p-2 rounded-lg mt-5`}>
                            <img src={testimonial.image} alt={testimonial.name} className='w-54 shadow-xl max-sm:w-44' />
                            <div className='flex flex-col justify-center items-center gap-2 text-center max-sm:text-left ml-6 w-[250px]'>
                                <img src={testimonial.profile} alt="" className='max-sm:w-10 max-sm:h-10 w-20 h-20 object-cover rounded-full mx-auto' />
                                <h1 className='text-xl max-sm:text-[0.9rem]'>{testimonial.name}</h1>
                                <p className='max-sm:text-[0.6rem] pb-2'>{testimonial.description}</p>
                            </div>
                        </div>
                    ))
                }
                <button onClick={handleArrow}><i className="bi bi-arrow-right-short text-2xl"></i></button>
            </div>
        </section>
    )
}

export default Testimonial