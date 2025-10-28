import { createContext, useContext } from 'react';

const ProductContext = createContext({})

export const useProductContext = () =>{
    return useContext(ProductContext)
}

const ProductProvider = ({children}: { children: React.ReactNode }) =>{
    return <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
}

export default ProductProvider