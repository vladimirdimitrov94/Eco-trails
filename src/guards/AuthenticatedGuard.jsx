import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"

export default function AuthenticatedGuard() {

    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return <Outlet />
}