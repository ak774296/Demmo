import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Regestration_step1 from './Pages/Regestration_step1'
import Regestration_step2 from './Pages/Regestration_step2'
function App() {
  const [formData,setFormData]=useState({firstName:"",middleName:"",lastName:"",email:"",password:"",cpassword:""});
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/regestration-step-1" element={<Regestration_step1 data={formData} setData={setFormData}/>}/>
            <Route path="/regestration-step-2" element={<Regestration_step2 data={formData} setData={setFormData}/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

    </div>
  );
}

export default App;
