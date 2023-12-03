import ViewPets from './pages/ViewPets'
import PetProfile from './pages/PetProfile'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/pets' element={<ViewPets />}></Route>
        <Route path='/pets/:id' element={<PetProfile/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
