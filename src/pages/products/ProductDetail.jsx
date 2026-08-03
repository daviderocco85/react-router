import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data));
    }, [id]);

    if (!product) {
        return <div className="page">Caricamento...</div>;
    }

    return (
        <div className="product-detail page">
            <h1>{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "200px", marginBottom: "1rem" }}
            />
            <p>{product.description}</p>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Prezzo:</strong> ${product.price}</p>
        </div>
    );
};
