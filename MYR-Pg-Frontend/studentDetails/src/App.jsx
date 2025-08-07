
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentRegistration from './Component/StudentRegistration'
import SuccessPage from './Page/SuccessPage'; 
import WelcomePage from './Page/WelcomePage';
import AuthPage from './Page/AuthPage';
import StudentList from './Component/StudentList';
import { ToastContainer } from "react-toastify";



function App() {

  // trigger netlify build
// Remove-Item -Recurse -Force node_modules, package-lock.json
//dir-for confirm deleted or not 

  return (
    <>
    <Routes>
     
      <Route path="/" element={<WelcomePage/>} /> 
      <Route path="/auth" element={<AuthPage/>} />   
       <Route path='/StudentRegistration' element={<StudentRegistration/>}/> 
        <Route path="/admin/users" element={<StudentList />} /> 
      <Route path="/success" element={<SuccessPage />} /> 
    </Routes>
        <ToastContainer />
    </>
  )
}

export default App
