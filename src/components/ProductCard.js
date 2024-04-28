import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

function ProductCard({product}) {

    const {image, name, price, description} = product;
    console.log(image)
    const { addToCart } = useContext(MyContext)

    return (
        <div className="flex max-sm:block justify-around items-center mt-20">
            
                <img src={image} alt={name} className="flex-1" />
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
            </div>
    )
}

export default ProductCard