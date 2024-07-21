'use client'

import { useContext, useState } from "react"
import { Content } from "./belowContent/Content"
import { itemsContext } from "@/app/context/itemsContext"


export default function Context (){
    return(
        <div >
            <h1>useContext hook</h1>

            <Content />
        </div>
    )
}