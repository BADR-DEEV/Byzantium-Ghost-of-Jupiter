
import React from 'react';
import Dashboard from './screens/Dashboard';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, reset } from "./features/auth/AuthSlice"
import PrivateRoute from "./components/privateRoute"
import MovieDataTable from './screens/MoviesTable/MovieDataTable';
import NavigationBar from './components/NavigationBar';
import EditMovie from './screens/MoviesTable/EditMovie';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen/>}></Route>
        <Route path="/register" element={<RegisterScreen/>}></Route>

        {/* <Route> */}  <Route   element={<PrivateRoute />}>
          <Route  path='/movies' element={<MovieDataTable />} />
        </Route>
        <Route   element={<PrivateRoute />}>
          <Route  path='/home' element={<Dashboard />} />
        </Route>
        <Route   element={<PrivateRoute />}>
          <Route  path='/edit/:id' element={<EditMovie />} />
        </Route>
      
<Route path='*' element = {<LoginScreen/>} />

        {/* <Route  path='/movies' element={<PrivateRoute />}>
          <Route  path='/movies' element={<MovieDataTable />} />
        </Route> */}

      </Routes>
      <ToastContainer  />

    </>

  );
};

export default App;