
import React from 'react';
import Dashboard from './screens/Dashboard';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';



const App = () => {
  return (
    <>
    <Routes>
    <Route path = "/login" exact element = {<LoginScreen/>}></Route>
    <Route path = "/register" exact element = {<RegisterScreen/>}></Route>

      <Route path = "/" exact element = {<Dashboard/>}>


      </Route>
    </Routes>

   </>

  );
};

export default App;