import { useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi'
import { User } from '../../types/User'
import {AuthContext, AuthContextType} from './AuthContext'

type Props = {
    children: JSX.Element
}

export const AuthProvider:React.FC<Props> = ({children}) =>{
    const [user, setUser] = useState<User | null>(null)
    const api = useApi()

    useEffect(()=>{
        const validateToken = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validadeToken(storageData)
                if(data.user){
                    setUser(data.user)
                }
            }
        }   
        validateToken()
    },[api])

    const signin = async (email:string, passsword:string) => {
        const data = await api.signin(email, passsword);
        if(data.user && data.token){
         setUser(data.user)
         setToken(data.token)
         return true
        }
        return false
        
    }

    const signout = async () => {
        await api.logout();
        setUser(null);
        setToken('')
    }

    const setToken = (token:string) => {
        localStorage.setItem('authToken', token)
    }

    return (
            <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}