import { useEffect, useState } from "react"
import { getProducts } from "../api/products"

export default function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await getProducts()
                console.log("Productos:", data)
                setProducts(data)
            } catch (error) {
                console.error("Error cargando productos:", error)
            }
        }

        loadProducts()
    }, [])

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold">Productos disponibles</h1>

            {products.length === 0 && <p>No hay productos</p>}

            {products.map(product => (
                <div key={product.id}>
                    <p>{product.nombre}</p>
                    <p>{product.precio}</p>
                    <p>{product.descripcion}</p>
                </div>
            ))}
        </div>
    )
}
