import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Moment from './Pages/Moment'
import Family from './Pages/Family'
import Job from './Pages/Job'
import Error from './Pages/Error'
function App() {
let multipage = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='*' element={<Error/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/moment' element={<Moment/>}/>
    <Route path='/family' element={<Family/>}/>
    <Route path='/job' element={<Job/>}/>
  </Route>
))
  return (
    <div className="app bg-black w-full text-txtColor h-[100vh]">
      <RouterProvider router={multipage}/>
    </div>
  )
}

export default App
