import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import {  MyContext } from "../context/MyContext";
import useTitle from "../hooks/useTitle";


function ProductDetail() {

    const params = useParams();
    const [product, setProduct] = useState([])
    const { addToCart } = useContext(MyContext)
    
    useEffect(() => {
        const fetchProduct = async () => {
            const recipes = `${process.env.REACT_APP_HOST_KEY}recipes/${params.id}`
            const response = await fetch(recipes)
            const data = await response.json()
            setProduct(data)
        }
        fetchProduct()
        
    }, [params.id])

    useTitle(`${product.name}`)
    

    return (
        <section className='body h-[80vh] flex justify-center items-center'>
            <div className="flex max-sm:block justify-around items-center mt-20">
                <img src={product.image} alt={product.name} className="flex-1" />
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold py-4">{product.name}</h1>
                    <span>
                        <h1 className="text-xl font-medium py-2">Price: ${product.price}</h1>
                    </span>
                    <p className="">{product.description}</p>
                    <span className="flex flex-wrap justify-start items-center gap-6">
                        <button onClick={() => addToCart(product)} className='mt-6 bg-[#ff905d] py-2 px-4 rounded-lg text-white'>Add to Cart</button>
                        <button  className='mt-6 bg-[#83b6fa] py-2 px-4 rounded-lg text-white'>Checkout</button>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail