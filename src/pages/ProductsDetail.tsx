import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById, type Product } from "../data/DummyJSON";

import "../pages/ProductsDetail.css";

export default function ProductsDetail() {
    const {id} = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError("Producto no encontrado.");
            setLoading(false);
            return;
        }

        const productId = Number(id);
        if (Number.isNaN(productId)) {
            setError("ID de producto inválido.");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        getProductById(productId)
        .then((data) => {
            setProduct(data);
            setLoading(false);
        })
        .catch(() => {
            setError("No se ha podido cargar el producto.");
            setLoading(false);
        });
}, [id]);

if (loading) return <p style={{ padding: 20 }}>Cargando detalle...</p>;
if (error) return <p style={{ padding: 20 }}>{error}</p>;
if (!product) return <p style={{ padding: 20 }}>Producto no encontrado.</p>;

return (
    <section className="detail">
      <Link to="/products" className="detail__back">← Volver a productos</Link>
  
      <div className="detail__grid">
        <div className="detail__media">
          <img className="detail__image" src={product.thumbnail} alt={product.title} />
        </div>
  
        <div className="detail__info">
          <h1 className="detail__title">{product.title}</h1>
          <p className="detail__category">{product.category}</p>
          <p className="detail__price">{product.price} €</p>
          <p className="detail__desc">{product.description}</p>
  
          {product.images?.length > 0 && (
            <>
              <h3 className="detail__subtitle">Más imágenes</h3>
              <div className="detail__thumbs">
                {product.images.slice(0, 8).map((img) => (
                  <img key={img} className="detail__thumb" src={img} alt={product.title} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
  
}