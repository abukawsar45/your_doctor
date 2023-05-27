import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";

const PrivateRoutes = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
  {
    return "loding......"
  }

  if(user?.email){
    return children;
  }
  return <Navigate to='/login'/>
};

export default PrivateRoutes;