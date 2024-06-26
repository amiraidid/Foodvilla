import { useContext } from 'react';
import useFetch from '../hooks/useFetch'
import { MyContext } from '../context/MyContext';
import { Link } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';
import { toast } from 'react-hot-toast'

function MenuCard({value}) {

    const {recipes} = useFetch(value);
    const { addToCart } = useContext(MyContext);

    function handleAdd(recipe) {
        addToCart(recipe);
        toast.success(`Added to the Cart ${recipe.name}`)
    }


    return (
        <section className='body my-10' id='menu-card'>
            <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4'>
                    
                {
                    recipes.length === 0 ? <SkeletonCard /> :(
                        recipes.map((recipe) => (
                            <div key={recipe.id} className='menu-card rounded-lg'>
                            <Link to={`product/${recipe.id}`}>
                                <img src={recipe.image} alt={recipe.name}/>
                                <h1 className='font-semibold py-1 text-gray-600'>{recipe.name}</h1>
                            </Link>
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