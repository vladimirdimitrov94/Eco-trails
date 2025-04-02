import { useContext } from "react";

import { login, register } from "../servives/authService";
import { AuthContext } from "../contexts/authContext";

export function useLogin() {

    const { changeAuthState } = useContext(AuthContext)

    async function loginHandler(email, password) {
        const result = await login(email, password);
        changeAuthState(result);
    }

    return loginHandler;
}

export function useRegister() {

    const { changeAuthState } = useContext(AuthContext)

    async function registerHandler() {
        const result = await register(email, password);
        changeAuthState(result);
    }

    return registerHandler;
};