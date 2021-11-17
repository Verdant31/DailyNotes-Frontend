import { createContext, useState, ReactNode } from 'react';
import { useHistory } from "react-router-dom";
import { firebase } from '../services/firebase/firebase';

type User = {
    id: string | null | undefined,
    email: string | null | undefined,
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
    var provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const [user, setUser] = useState<User>();

    async function signInWithGoogle() {
        console.log('teste');
        await firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const userInfo = result.user;
                setUser({
                    id: userInfo?.email,
                    email: userInfo?.email
                })
                history.push('/dashboard')
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}
