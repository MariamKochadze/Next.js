'use client'
import styles from './Counter.module.scss'

import { useEffect, useState } from "react"

export default function Counter(){
    const[count,setCount]=useState(0);

    // useEffect(()=>{
    //     const intevalId = setInterval (()=>{
    //         setCount((n)=>n+1)
    //     },1000);
    //     return ()=> clearInterval(intevalId)
    // })
    
    return(
        <div className={styles.divContainer}>
        <h1 className={styles.container}>{count}</h1>
        </div>
    )
}