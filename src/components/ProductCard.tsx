import type { Product } from "../data/DummyJSON";
import { Link } from "react-router-dom";
type Props = { product: Product };


export default function ProductCard({ product }: Props) {

    return (
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div
            className="product-card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#ffffff0f",
              cursor: "pointer",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                background: "#55535305",
                borderRadius: "10px",
              }}
            />
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </div>
        </Link>
      );
    }