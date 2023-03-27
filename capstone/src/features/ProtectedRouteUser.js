// @author: Naomy Tung 
// @version: 1.0

// Author: Naomy Tung
// Version 1
// Date: 18/3/2023

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
	

	const { user } = useSelector(
        (state) => state.auth
    )

	if (user && user.type==="Client") {
    return true;	
	} else {
		return false;
	}
}

const ProtectedRouteUser = () => {
  const isAuth = useAuth();
  return isAuth ? 
    <Outlet />
   : (
    <Navigate to="/"/>
  );
};

export {
  ProtectedRouteUser,
  useAuth,
}