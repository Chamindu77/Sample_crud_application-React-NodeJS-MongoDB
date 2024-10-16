import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StudentCrud from "./components/StudentCrud";
import Register2 from "./components/Register2";
import FrontPage from "./pages/FrontPage"
import Home from "./pages/Home"
import AllCoursePage from "./pages/AllCoursePage";
import AllCoursePageElec from "./pages/AllCoursePageElec";
import StudentRegisterForm from "./components/StudentRegisterForm";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/register" element={<Register2 />} />

        <Route 
          path="/studentcrud" 
          element={
            <PrivateRoute>
              <StudentCrud />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/allcoursepagecom" 
          element={
            <PrivateRoute>
              <AllCoursePage/>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/allcoursepageelec" 
          element={
            <PrivateRoute>
              <AllCoursePageElec/>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/all" 
          element={
            
              <StudentRegisterForm/>
            
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
