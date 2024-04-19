import { MenuCard } from '../components'
import { useState } from 'react';


function Categories() {
    const [type, setType] = useState('')
    const categories = ['pasta', 'desert', 'salad', 'cake', 'Rolls','sandwich'];

    function handleCategory (category) {
        setType(category)
    }


    return (
        <section className='body '>
            <h1 className='text-2xl font-bold text-center pt-5 pb-10'>Categories</h1>
            <div className=''>
                <ul className='flex flex-wrap justify-between items-center max-sm:justify-center max-sm:gap-4'>
                    {categories.map((category, index) => (
                        <button onClick={() => handleCategory(category)} key={index} className='bg-[#644536] p-2 text-white rounded-lg shadow-lg w-36 mt-2'><li>{category}</li></button>
                    ))}
                </ul>
            </div>
            <MenuCard value={type}/>
        </section>
    )
}

export default Categories