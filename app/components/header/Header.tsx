'use client'

import Link from "next/link"
import style from "./Header.module.scss"

export default function Header(){
    return(
        <header className={style.container1}>
        <Link href="/"></Link>
         <Link href="/routing/main">Main</Link>
         <Link href="/routing/productlist">Product List</Link>
         <Link href="/routing/contactus">Contact Us</Link>
         <Link href="/routing/context">Context API</Link>
         <Link href="/routing/users">Users</Link>
        </header>
    )
}