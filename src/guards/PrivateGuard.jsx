import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"

export default function PrivateGuard() {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to='/register' />
    }

    return <Outlet />
}