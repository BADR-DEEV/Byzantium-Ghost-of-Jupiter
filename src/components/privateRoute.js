import React from 'react';
import { Navigate , Route , Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import AuthContext from '../Context/Auth/AuthContext';



const PrivateRoute = () => {

   
    const userLogin = useSelector(state => state.auth)
    const {isLoading , isError , user , isSuccess} = userLogin

    // const authContext = useContext(AuthContext);
    // const { isAuthenticated } = authContext;
    return (




         // determine if authorized, from context or however you're doing it

        // If authorized, return an outlet that will render child elements
        // If not, return element that will navigate to login page
         userLogin.user ? <Outlet /> : <Navigate to="/login" />
        // <Route
        //     {...rest}
        //     render={props =>
        //         !localStorage.userInfo ? (
        //             <Redirect to={{
        //                 pathname: '/login',
        //             }}/>
        //         ) : (
        //                 <Component {...props} />
        //             )
        //     }
        // />
    );
};

export default PrivateRoute;
