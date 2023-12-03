import ViewPets from './pages/ViewPets'
import PetProfile from './pages/PetProfile'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Blogs from "./components/Blog";
import BlogForm from "./components/addBlog";
import BlogDetails from './components/Blogdetail';

import Aboutus from './components/Aboutus'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/pets' element={<ViewPets />}></Route>
        <Route path='/pets/:id' element={<PetProfile/>}></Route>

        <Route path='/addblog' element={<BlogForm />}></Route>
        <Route path='/getblogs' element={<Blogs />}></Route>
        <Route path='/blogdetails/:id' element={<BlogDetails />}></Route>

        <Route path='/aboutus' element={<Aboutus />}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
