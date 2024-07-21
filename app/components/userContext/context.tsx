'use client'

import { createContext } from "react";

type User = {
    id: number,
    name: string
}

// create context
export const userContext = createContext<User[]>([]);

// create custom provider component
export const UserProvider = ({children}:any)=>{
    const users: User[] =[
        {
            id: 1,
            name: 'Jane',
        },
        {
            id: 2,
            name: 'James',
        },
        {
            id: 3,
            name: 'John',
        },
    ]
    return(
        <userContext.Provider value={users}>{children}</userContext.Provider>
    )
}