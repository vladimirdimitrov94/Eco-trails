
import { login, register, logout } from "../servives/authService";
import { useAuthContext } from "../contexts/AuthContext"

export function useLogin() {

    const { changeAuthState } = useAuthContext()

    async function loginHandler(email, password) {
        const result = await login(email, password);
        changeAuthState(result);

    }

    return loginHandler;
}

export function useRegister() {

    const { changeAuthState } = useAuthContext()

    async function registerHandler(email, password, username) {
        const { password: _, ...result } = await register(email, password, username);
        changeAuthState(result);


    }

    return registerHandler;
};

export function useLogout() {

    const { logout: localLogout } = useAuthContext()

    async function logoutHandler() {
        await logout();
        localLogout()
    }

    return logoutHandler;
} 