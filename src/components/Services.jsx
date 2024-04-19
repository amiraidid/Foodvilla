import React from 'react'

function Services() {

    const services =  [
        {name: 'Healthy Food', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.', image: './assets/others/menu_8.png',},
        {
            name : "Fast Delivery",text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.',image: "./assets/others/delivery-bike.png"
        },
        {
            name: "Easy Order",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.',
            image: "./assets/others/order.jpg"
        },
        {
            name: "Buffet Service",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.',
            image: "./assets/others/buffet.jpg"
        }
    ]

    return (
        <section className='body'>
            <h1 className='text-4xl font-bold text-center my-4'>Our Services</h1>
            <div className='flex flex-wrap justify-between items-center max-sm:justify-center '>
                {
                    services.map((service, index) => (
                        <div key={index} className='shadowed w-52 max-sm:w-40 flex flex-col justify-center items-center mr-4 text-center p-2 max-sm:mb-4'>
                            <img src={service.image} alt="" className='w-28 max-sm:w-20'/>
                            <h1 className='pb-4 font-bold'>{service.name}</h1>
                            <p className='text-[1rem] max-sm:text-[0.76rem]'>{service.text}</p>
                        </div>
                    ))
                }
                
            </div>
            
        </section>
    )
}

export default Services