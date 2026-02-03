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

            <div class="grid grid-cols-1 md:grid-cols-3  mt-5 gap-5 text-white text-center">
            {products.map(product => (
                <div key={product.id} className="bg-blue-800 rounded-b-lg shadow">
                    <p><span className="font-bold">Producto: </span>{product.nombre}</p>
                    <p><span className="font-bold">Precio $ : </span>{product.precio}</p>
                    <p><span className="font-bold">Descripción: </span>{product.descripcion}</p>
                    <div className="mt-4">
                        <button className="col-end-10 bg-emerald-600 rounded-lg">Editar </button>
                        <button className="col-end-10 bg-red-600 rounded-lg">Eliminar </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
