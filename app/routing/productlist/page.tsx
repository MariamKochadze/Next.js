'use client'

import { useEffect, useState } from "react"
import styles from "./page.module.scss"

export default function aboutus(){
const [products, setProducts]=useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((resp)=>resp.json())
    .then((data)=>setProducts(data))
    .catch((error)=> console.log(error))
},[])


    return(
        <div className={styles.container}>
            {
                products.map((product)=>{
                    return (
                        <div key={product.id}>
                            <img src={product.image}/>
                            <p>{product.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}