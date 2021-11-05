import { createContext, useState } from 'react';
import accs from './acc';

export const AuthContext = createContext({
    
})

export const AuthProvider = (
    {
        children
    }
) => {

    const [user, setUser] = useState({});

    function verifyAccount({
        email,
        password
    }) {
        const currentAccount = accs.find(acc => acc.owner === email && acc.password === password);

        if (!currentAccount) {
            throw new Error('Usuário não encontrato');
        }
        setUser(currentAccount);
    }

    return (
        <AuthContext.Provider value={{user, setUser, verifyAccount}}>{children}</AuthContext.Provider>
    )
}
