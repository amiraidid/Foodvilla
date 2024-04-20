import {useState, useEffect} from 'react'

function useFetch(value) {

    const [recipes, setRecipes] = useState([])
    const url = `${process.env.REACT_APP_HOST_KEY}?category=${value}`
    

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