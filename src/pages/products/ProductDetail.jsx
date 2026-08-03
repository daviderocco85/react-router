import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.data || !res.data.id) {
                    navigate("/products");
                } else {
                    setProduct(res.data);
                }
            })
            .catch(() => {
                navigate("/products");
            });
    }, [id, navigate]);

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
