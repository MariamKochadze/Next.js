'use client'
import { createContext } from "react"

// creation of context
export const itemsContext = createContext<{id: number, name: string}[]>([]);


// provider component
export const ItemsProvider = ({ children }: any) => {
    const items = [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
    ];

    return <itemsContext.Provider value={items}>{children}</itemsContext.Provider>
}