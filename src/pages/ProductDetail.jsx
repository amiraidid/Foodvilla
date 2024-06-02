import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import useTitle from "../hooks/useTitle";
import { ProductCard } from "../components";


function ProductDetail() {

    const params = useParams();
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        const fetchProduct = async () => {
            const recipes = `${process.env.REACT_APP_HOST_KEY}/${params.id}`
            const response = await fetch(recipes)
            const data = await response.json()
            setProduct(data)
        }
        fetchProduct()
        
    }, [params.id])

    useTitle(`${product.name}`)
    

    return (
        <section className='body h-screen flex justify-center items-center'>
            <ProductCard product={product}/>
        </section>
    )
}

export default ProductDetail