import { itemsContext } from "@/app/context/itemsContext"
import { Fragment, useContext } from "react"

const ItemLits = () => {
    const items = useContext(itemsContext)
    return <>
      {
        items.map((item: any) => {
            return <h1>
                {item.name}
            </h1>
        })
      }
    </>
}


export const Content = () => {
    return <>
       <h2>COntent should eb here ...</h2>
        <ItemLits />
    </>
}