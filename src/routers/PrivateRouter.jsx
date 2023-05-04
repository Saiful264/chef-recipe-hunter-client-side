import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <button type="button" class="" disabled>
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        </svg>
      </button>
     }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRouter;