import {useState, useEffect} from 'react'

function useFetch(value) {

    const [recipes, setRecipes] = useState([])
    const url = `http://localhost:8000/recipes?category=${value}`
    

    useEffect(() => {
        async function fetchData () {
            const response = await fetch(url);
            const data = await response.json();
            setRecipes(data);
        }
        fetchData();
    },[url])

    return {recipes}
}

export default useFetch