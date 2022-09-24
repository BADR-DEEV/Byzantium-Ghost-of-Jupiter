
import React from 'react';
import Dashboard from './screens/Dashboard';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, reset } from "./features/auth/AuthSlice"
import PrivateRoute from "./components/privateRoute"
import MovieDataTable from './screens/MoviesTable/MovieDataTable';
import NavigationBar from './components/NavigationBar';
import EditMovie from './screens/MoviesTable/EditMovie';
import EditUser from './screens/UsersTable/EditUser';
import UserDataTable from './screens/UsersTable/UserDataTable';
import ActorDataTable from './screens/ActorsTable/ActorDataTable';
import EditActor from './screens/ActorsTable/EditActor';
import GenresCards from './screens/GenresTableCards/GenresCards';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen/>}></Route>
        <Route path="/register" element={<RegisterScreen/>}></Route>

        <Route   element={<PrivateRoute />}>
          <Route  path='/movies' element={<MovieDataTable />} />
        </Route>

              <Route   element={<PrivateRoute />}>
             <Route  path='/users' element={<UserDataTable />} />
        </Route>

        <Route   element={<PrivateRoute />}>
             <Route  path='/actors' element={<ActorDataTable />} />
        </Route>

        <Route   element={<PrivateRoute />}>
             <Route  path='/genres' element={<GenresCards />} />
        </Route>

        <Route   element={<PrivateRoute />}>
          <Route  path='/home' element={<Dashboard />} />
        </Route>
        <Route   element={<PrivateRoute />}>
          <Route  path='/movies/edit/:id' element={<EditMovie />} />
        </Route>

        <Route   element={<PrivateRoute />}>
          <Route  path='/actors/edit/:id' element={<EditActor />} />
        </Route>

        
      
      
      
        <Route   element={<PrivateRoute />}>
          <Route  path='/users/edit/:id' element={<EditUser />} />
        </Route>

        <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />

        {/* <Route  path='/movies' element={<PrivateRoute />}>
          <Route  path='/movies' element={<MovieDataTable />} />
        </Route> */}

      </Routes>
      <ToastContainer  />

    </>

  );
};

export default App;