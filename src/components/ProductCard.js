import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

function ProductCard({product}) {

    const {image, name, price, description} = product;
    const { addToCart } = useContext(MyContext)

    return (
        <section className="flex max-sm:block max-sm:justify-center justify-around mx-auto items-center mt-20 pb-10 mb-5 ">
            
                <img src={image} alt={name} className="flex-1 rounded-md mr-4  mt-10 w-44 max-sm:w-full max-sm:mt-28" />
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold py-4">{name}</h1>
                    <span>
                        <h1 className="text-xl font-medium py-2">Price: ${price}</h1>
                    </span>
                    <p className="">{description}</p>
                    <span className="flex flex-wrap justify-start items-center gap-6">
                        <button onClick={() => addToCart(product)} className='mt-6 bg-[#ff905d] py-2 px-4 rounded-lg text-white'>Add to Cart</button>
                        <button  className='mt-6 bg-[#83b6fa] py-2 px-4 rounded-lg text-white'>Checkout</button>
                    </span>
                </div>
        </section>
    )
}

export default ProductCard