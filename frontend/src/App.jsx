import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import FoundPets from "./components/FoundPets";
import LoginSimpleUser from "./components/LoginSimpleUser";
import LostPets from "./components/LostPets";
import PetProfile from "./components/PetProfile";
import ReportLostPet from "./components/ReportLostPet";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import UserProfile from "./components/UserProfile";
import UserSignup from "./components/UserSignup";
import VetLogin from "./components/VetLogin";
import VetSignup from "./components/VetSignup";
import ViewPets from "./pages/ViewPets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ResponsiveNavbar />
        <Routes>
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<LoginSimpleUser />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
      {/* <ResponsiveNavbar />
      <Aboutus />
      <Blog />
      <FoundPets />
      <LostPets />
      <PetProfile />
      <ReportLostPet />
      <UserProfile />
      <ViewPets /> 
      <UserSignup />
      <VetSignup />
      <LoginSimpleUser />
      <VetLogin /> */}
    </>
  );
}
export default App;
