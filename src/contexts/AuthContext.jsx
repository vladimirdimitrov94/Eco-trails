import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext({});

export function AuthContextProvider(props) {

    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken)
        setAuthState(state)
    }

    const logout = () => {

        setAuthState(null);
        localStorage.clear();
    }

    const contexData = {
        id: authState?._id,
        accessToken: authState?.accessToken,
        username: authState?.username,
        email: authState?.email,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contexData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}