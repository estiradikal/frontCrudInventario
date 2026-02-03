import { useEffect, useState } from "react"
import { getProducts } from "../api/products"

export default function ProductList() {
    

    const [products, setProducts] = useState([])

    const loadProducts=async() => {
        const response=await getProducts()
        console.log(response)
        setProducts(response.data)
    }

    useEffect(() => {

        loadProducts()

    },[])


  return (
    <div>
      <h1>Productos disponibles</h1>
    </div>
  )
}
