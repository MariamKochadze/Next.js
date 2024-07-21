'use client'

import { userContext } from "@/app/components/userContext/context"
import { useContext } from "react"

const UserList = () => {
    const users = useContext(userContext)
    return (
     <>
     {
        users.map((user)=>{
          return (
            <div key={user.id}>{user.name}</div>
          )
        })
     }
     </>
    )
} 


export default function Users (){
    return(
        <>
        <h1>This is my Users</h1>
        <UserList />
        </>
    )
}

