import { useContext } from "react";
import { AuthProvider } from "./Routes/MainLayout";
import { Navigate } from "react-router-dom";

 

const PrivateRoute = ({children}) => {
const {user,loading}  = useContext(AuthProvider)
if(loading){
    return <p>Loading...</p>
}

if(user){
    return children;
}
    return (
        <div>
            <Navigate to="/login">Login</Navigate>
        </div>
    );
};

export default PrivateRoute;