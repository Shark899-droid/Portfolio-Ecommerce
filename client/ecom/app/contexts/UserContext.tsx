import { createContext, useContext } from 'react';

const UserContext = createContext({})

export const useUserContext = () =>{
    return useContext(UserContext)
}

const UserProvider = ({children}: { children: React.ReactNode }) =>{
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export default UserProvider