import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoriesBlog = () => {
    const [Categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(' https://frozen-bastion-26115.herokuapp.com/api/categories');
        
                setCategories(result.data);
              } catch (error) {
                setIsError(true);
              }
        
              setIsLoading(false);
        }

        fetchCategories()
    }, [])

    console.log('categories', Categories)
   
  return (
    <div class='ml-5 w-1/4 absolute'>
        <h4 class='bg-primary text-white text-2xl font-bold p-5 mt-20'>Categories</h4>

        {isError && <div>Something went wrong ...</div>}

        {isLoading && <p>Loading ...</p>}


        {Categories.length > 0 ? Categories.map((category) => (
            <div key={category.category_id} class='text-xl pb-3 border-b-2 pl-10 sticky'>
                <Link to={`/categories/${category.category_id}`}>{category.category_name}</Link>
            </div>
        )) : <p>No Category Found</p>}
      
    </div>
  )
}

export default CategoriesBlog;