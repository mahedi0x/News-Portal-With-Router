import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/utils/loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
  
    if (!user) {
      // Redirect to login and remember where user tried to go
      return <Navigate to="/auth/login" state={location.pathname}  />;
    }
  
    return children;
  };
export default PrivateRoute;