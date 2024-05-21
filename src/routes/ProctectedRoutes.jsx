import { Navigate } from 'react-router-dom';


function ProctectedRoutes({children}) {
    const isAuth = localStorage.getItem("token") || false;
    return isAuth ? children : <Navigate to='/login' />
}

export default ProctectedRoutes