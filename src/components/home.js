
import React, { Fragment, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Nav from './nav'
import About from './about';
import Main from './main';
import Footer from './footer';
import Contact from './contact';

function Home() {
  const [data, setData] = useState( []);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(' https://frozen-bastion-26115.herokuapp.com/api/blogs');

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);


  var date = new Date()
  return (
    
    <div>
      <Main/>
      
   
    <Fragment>
      
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>
            <div class="loadingio-spinner-bars-qka3h4jytt "><div class="ldio-lmbqbv956di w-full h-screen">
<div></div><div></div><div></div><div></div>
</div></div>

        </div>
      ) : (  
        <div>
          <div class='pl-10'>
            <h2 class='text-5xl pt-10 pb-2 text-primary font-bold font-Asap '>Blogs</h2>
            <h1 class= 'text-xl text-gray-400'>Recent</h1>
          </div>
          
        <ul class='grid grid-cols-3 gap-4 pl-20 pr-20 pt-10 pb-10 overflow-hidden'>

    
          {data.map(blog => (
            
            <div class='border-2 rounded-sm shadow-sm'  key={blog.blog_id}>
              <li><img src='https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/></li>
              <li class='text-primary text-2xl  p-5 font-bold font-secular '>{blog.title}</li>
              <li class='pr-5 pl-5 text-orange-400 font-secular flex'><p class='text-gray-500 pr-2 font-bold'>Created at:</p>
              {new Date(blog.created_at).toLocaleDateString()}
                            
              </li>
              <li class='pr-5 pl-5 font-secular text-xl text-gray-500 pt-2 pb-2'>{blog.Content}</li>
              <li class='pr-5 pl-5 text-orange-400 font-secular flex'><p class='text-gray-500 pr-2 font-bold'>Updated at:</p>
               {new Date(blog.updated_at).toLocaleDateString()}
               </li>
            <div class='flex items-center flex-wrap bg-white p-5'>
              <Link to='read-more'>
                <a href='#' class='hover:bg-primary hover:text-white transition-colors duration-200 bg-white text-primary border-2 border-primary inline-flex items items-center md:mb-2 lg:mb-0  p-1 rounded-md drop-shadow-lg'> Read more</a>
                </Link>
            </div>
            </div>
          ))} 
        </ul>
        </div>
      )}
    </Fragment>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Home;


// import {createStore,applyMiddleware} from 'redux'
// import react from 'react'
// import redux from 'redux'
// import axios from 'axios'


// // creating inital state
// const initialState ={
//   blogs: [],
//   Loading: false,
//   error: ''
// }

// //creating constants
// const Blog_Fetch_Request = 'BlogFetchRequest'
// const Blog_Fetch_Success = 'Blog_Fetch_Success'
// const Blog_Fetch_Failure = 'Blog_Fetch_Failure'

// //creating action creators

// const fetchRequest =()=>{
//   return{
//     type: Blog_Fetch_Request
//   }
 
// }

// const fetchSuccess = blogs=>{
//   return{
//     type: Blog_Fetch_Success,
//     payload: blogs
//   }
// }

// const fetchFailure = error =>{
//   return{
//     type: Blog_Fetch_Failure,
//     payload: error
//   }
// }


// //action creator using thunk-middleware which returns a fucntion
// const fetchBlogs =()=>{
//   fetchRequest()
//     return{
//       function(dispatch){
//           axios.get('https://frozen-bastion-26115.herokuapp.com/')
//           .then(response=>{
//             const blogs= response.data.map(blog=> key= {blog_id})
//             console.log(blogs)
//             dispatch(fetchSuccess())
//           .catch(err=>{
//             dispatch(fetchFailure(err.message))
            
//           })
//           })
        
//       }

//     }

//   }

// //reducers 
// const reducer = (state= initialState, action)=>{
//         switch(action.type) {
//           case 'BlogFetchRequest':
//             return{
//               ...state,
//               Loading: true

//                      }
//           case 'Blog_Fetch_Success':
//             return{
//               ...state,
//               blogs:  payload.blogs,
//               Loading: false,
//               error: ''
              
//             }

//           case 'Blog_Fetch_Failure':
//             return{
//               ...state,
//               blogs: [],
//               Loading: false,
//               error: payload.blogs
//             }
//           default: return state
//         }

//   }
  

//   //redux store
//   const store = createStore(reducer,applyMiddleware(thunk))
//   store.subscribe(()=>{},getState(fetchBlogs()) )




