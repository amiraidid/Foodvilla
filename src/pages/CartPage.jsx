import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import useTitle from '../hooks/useTitle'


function CartPage() {

    useTitle("cart")

    const { cartItems, removeFromCart , updateTotal} = useContext(MyContext)
    
    return (
        <section className='body h-screen mt-20'>
            <h1 className='text-4xl font-bold py-4'>Total: ${updateTotal(cartItems)}</h1>
            {
                cartItems.length === 0 ? (<h1 className='text-4xl text-center font-bold'>Your Cart is Empty</h1>) : (
                    cartItems.map((item) => (
                        <div key={item.id} className='flex justify-between items-center  shadowed p-2 mt-4'>
                            <span className='flex justify-between items-center gap-10 '>
                                <img src={item.image} alt="" className='w-24'/>
                                <h1>{item.name}</h1>
                            </span>
                            <span className='flex items-center gap-4 mr-2'>
                                <h1 className='font-bold text-2xl'>${item.price}</h1>
                                <button onClick={() => removeFromCart(item.id)}><i className="bi bi-trash-fill text-red-700 text-2xl cursor-pointer"></i></button>
                            </span>
                        </div>
                    ))
                )
            }
        </section>
    )
}

export default CartPage