import { Navigate } from 'react-router-dom';


function ProctectedRoutes({children}) {
    const isAuth = JSON.parse(localStorage.getItem("isAuthed") || false);
    return isAuth ? children : <Navigate to="/" />
}

export default ProctectedRoutes