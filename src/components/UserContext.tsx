import React, {Children, createContext, PropsWithChildren, useState} from "react"


interface Props {
    loggedUser: string; 
    setLoggedUser: (user: string) => void;
}

export const UserContext  = createContext({} as Props)

export const UserContextProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [loggedUser, setLoggedUser] = useState("")

    return (
        <UserContext.Provider value={{
            loggedUser, setLoggedUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

