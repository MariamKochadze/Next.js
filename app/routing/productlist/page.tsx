'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Loader from "@/app/components/loader/Loader";
import { ProductList } from "@/app/components/product-list/ProductList";

export type Product = {
 title: string,
 image: string,
 id: string
}

const ProductPage: React.FC = () => {
const [products, setProducts]=useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((resp)=>resp.json())
    .then((data)=>{
        setProducts(data);
        setIsLoading(false);
    })
    .catch((error)=> console.log(error))
},[])


    return(
        <div className={styles.container}>
            {
                isLoading ? 
                <Loader/>
                :
               <ProductList products={products}/>
            }
        </div>
    )
}

export default ProductPage;