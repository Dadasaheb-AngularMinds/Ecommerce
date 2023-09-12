import { useLocation, Navigate, Outlet } from "react-router-dom"

const RequireAuth = () => {
    const location = useLocation()
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        console.log(!!token)
        return token;  
      };
    const content = (
        isAuthenticated()
            ? <Outlet />
            : <Navigate to="login" replace />
    )
    return content
}
export default RequireAuth