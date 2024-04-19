import { useContext  } from 'react';
import useFetch from '../hooks/useFetch'
import { MyContext } from '../context/MyContext';


function MenuCard({value}) {

    const {recipes} = useFetch(value);
    const { addToCart } = useContext(MyContext);
    

    function handleAdd(recipe) {
        addToCart(recipe)
        alert(`Added to the Cart ${recipe.name}`)
    }


    return (
        <section className='body my-10'>
            <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4 '>
                {recipes.length === 0 ? (<h1 className='text-3xl text-center font-bold'>There is no data</h1>) :(
                    recipes.map((recipe) => (
                        <div key={recipe.id} className='menu-card rounded-lg'>
                            <img src={recipe.image} alt={recipe.name} className=''/>
                            <h1 className='font-semibold py-1 text-gray-600'>{recipe.name}</h1>
                            <span className='flex justify-between items-center'>
                                <h1>${recipe.price}</h1>
                                <button onClick={() => handleAdd(recipe)} className='mb-2'><i className="bi bi-plus-circle text-2xl text-[#ff905d]"></i></button>
                            </span>
                        </div>
                    ))
                )
            }
            </div>
        </section>
    )
}


export default MenuCard