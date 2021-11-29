import React from 'react';
import { createContext, useState } from 'react';
import accs from './acc';
import { UserService } from '../services';

export const AuthContext = createContext({
    
})

export const AuthProvider = (
    {
        children
    }
) => {

    const [user, setUser] = useState({});

    async function verifyAccount({
        email,
        password
    }) {
       try {
        const currentAccount = await UserService().getUser({ email, password });
        console.log(currentAccount.data);
        setUser(currentAccount.data);
       } catch (error) {
           throw new Error(error);
       }
    }

    return (
        <AuthContext.Provider value={{user, setUser, verifyAccount}}>{children}</AuthContext.Provider>
    )
}
