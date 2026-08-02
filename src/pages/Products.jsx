import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data));
    }, []);

    return (
        <div className="products page">
            <h1>Prodotti</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
};

