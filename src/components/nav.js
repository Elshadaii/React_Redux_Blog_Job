import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import molto from '../imgs/molto.png'
import About from './about'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import PrivateRoute from "./private_route";


const Nav =(props)=>{

    const history  = useNavigate()

    const logout = (e)=>{
        props._logout()
        history.push('/login')
      }

      
    return (
           <div>
               <nav className= "flex w-full justify-between pt-5 pl-3 pb-5 shadow-md bg-white">
               <span>
                   <Link to='/'>
                   <img src={molto} className='w-full h-8'></img>
                   </Link>
               </span>
               <ul className='flex justify-evenly font-Asap text-gray-600'>
                   {/* <Link to="/" class="">
                   <li className='hover:text-primary'>Home</li>
                   </Link> */}
                   <Link to='/about' className="">
                   <li class='pl-6 hover:text-primary'>About</li>
                   </Link>
                   <Link to="/categories" className="">
                   <li className='pl-6 hover:text-primary'>Blog</li>
                   </Link>
                   <Link to="/contact" className="">
                   <li className='pl-6 hover:text-primary'>Contact</li>
                   </Link>
                  

                    <Link to="/jobs">
                        <li class='pl-6  hover:text-primary'>
                                Jobs
                        </li>
                    </Link>


                    <Link to="/add">
                        <li class='pl-6 hover:text-primary'>
                                Add
                        </li>
                    </Link>
                    
                    {props.auth.isLoggedIn &&
                    <li className='ml-5 mr-2 pl-3 pt-1 pb-1 pr-3 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out'>
                        <button onClick={logout} >
                        logout
                        </button>
                    </li>}

                    <Link to="/login " className="">
                   <li className='ml-5 mr-2 pl-3 pt-1 pb-1 pr-3 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out'>Login</li>
                   </Link>
                   <Link to="/register" className="">
                   <li className='ml-2 mr-2 pl-3 pt-1 pb-1 pr-3 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transiton ease-out'>Register</li>
                   </Link>
                </ul>
                </nav> 
           </div>   
    )
}


const mapDispatchToProps = (dispatch)=>{
  return {
    _logout: ()=>dispatch(logout())
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

