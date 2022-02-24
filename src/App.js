import './App.css';
import Main from './components/main'
import Home from './components/home';
import About from './components/about'
import Footer from './components/footer';
import CategoriesBlog from './components/CategoriesBlog'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import blogs from './components/blogs';
import Contact from './components/contact';
import pageRenderer from './pageRenderer';
import CategoryBlogs from './components/CategoryBlogs';
import JobSeekerRegister from './components/JobSeekerRegister';
import JobRecruiterRegister from './components/JobRecruiterRegister';
import ReadMore from './components/ReadMore';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';


import AddJob from "./components/add-job.component";
import Job from "./components/job.component";
import JobsList from "./components/jobs-list.component";
import PrivateRoute from "./components/private_route";
import Login from './components/login.component'

import Register from './components/register.component'

import AddApplication from './components/add-application-component'
import Application from './components/application.component'
import Nav from './components/nav'
function App() {
  return(
        <div>
          <Nav />
          <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/categories' element={<CategoriesBlog />} />
              <Route path='/categories/:categoryId' element={<CategoryBlogs />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register/>} />
              <Route path='/read-more' element={<ReadMore/>} />
              <Route path='/job-seeker-Register' element= {<JobSeekerRegister />} />
              <Route path='/job-recruiter-Register' element={<JobRecruiterRegister />} />


              {/* from jobs */}
              <Route exact path="/jobs" element={<JobsList />} />
              <Route exact path="/add" element={<PrivateRoute  role="Job Recruiter"><AddJob/></PrivateRoute> } />
              <Route exact  path="/jobs/:id" element={<PrivateRoute role="Job Recruiter"><Job/></PrivateRoute>} />

              {/* <PrivateRoute exact role="Job Seeker" path="/add-application" component={AddApplication } />
              <PrivateRoute exact role="Job Seeker" path="/applications/:id" component={Application} />
               */}
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>}/>
          </Routes>
        </ div>
  ) ;
}

export default App;
