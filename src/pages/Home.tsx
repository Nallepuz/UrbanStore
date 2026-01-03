import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, type Product } from "../data/DummyJSON";

import "./Home.css";

import Carrusel1 from "../images/Carrusel-1.jpg"
import Carrusel2 from "../images/Carrusel-2.jpg"
import Carrusel3 from "../images/Carrusel-3.jpg"
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaTo: string;
};

const FASHION_CATEGORIES = new Set([
  "mens-shirts",
  "womens-dresses",
  "tops",
  "mens-shoes",
  "womens-shoes",
  "womens-bags",
  "mens-watches",
  "womens-jewellery",
  "womens-watches"
]);

const CATEGORY_OPTIONS = [
  { label: "all", value: "all" },
  { label: "Mens Shirts", value: "mens-shirts" },
  { label: "Womens Dresses", value: "womens-dresses" },
  { label: "Tops", value: "tops" },
  { label: "Mens Shoes", value: "mens-shoes" },
  { label: "Womens Shoes", value: "womens-shoes" },
  { label: "Womens bags", value: "womens-bags" },
  { label: "Mens watches", value: "mens-watches" },
  { label: "Womens jewellery", value: "womens-jewellery" },
  { label: "Mens watches", value: "womens-watches" },
] as const;

type CategoryValue = typeof CATEGORY_OPTIONS[number]["value"];

export default function Home() {

  // CARRUSEL --------------------------------------------------------------------
  const slides: Slide[] = useMemo(
    () => [
      {
        image: Carrusel1,
        eyebrow: "Winter drop",
        title: "Modelos para el frío",
        subtitle: "Chaquetas, fleece y esenciales urbanos para esta temporada.",
        ctaText: "Ver chaquetas",
        ctaTo: "/category/jackets",
      },
      {
        image: Carrusel3,
        eyebrow: "Sneaker club",
        title: "Nuevas zapatillas",
        subtitle: "Descubre los lanzamientos y los clásicos que nunca fallan.",
        ctaText: "Ver zapatillas",
        ctaTo: "/category/shoes",
      },
      {
        image: Carrusel2,
        eyebrow: "Streetwear",
        title: "Outfits diarios",
        subtitle: "Camisetas, pantalones y básicos para tu estilo urbano.",
        ctaText: "Ir a productos",
        ctaTo: "/products",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const current = slides[index];

  // PRODUCTOS --------------------------------------------------------------------
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => {
        console.log("TOTAL:", data.length);
        console.log("CATEGORIES:", [...new Set(data.map(p => p.category))]);
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se han podido cargar los productos.");
        setLoading(false);
      });
  }, []);

  const fashionProducts = useMemo(() => {
    return products.filter((p) => FASHION_CATEGORIES.has(p.category));
  }, [products]);

  // FILTROS --------------------------------------------------------------------
  const [category, setCategory] = useState<CategoryValue>("all");

  const filteredProducts = useMemo(() => {
    if (category === "all") return fashionProducts;
    return fashionProducts.filter((p) => p.category === category);
  }, [fashionProducts, category]);



  return (
    <main>
      <section
        className="carrusel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="UrbanStore carrusel"
      >
        <div
          className="carrusel_bg"
          style={{ backgroundImage: `url(${current.image})` }}
        />

        <div className="carrusel_overlay" />
        <div className="carrusel_content">
          <p className="carrusel_eyebrow">{current.eyebrow}</p>
          <h2 className="carrusel_title">{current.title}</h2>
          <p className="carrusel_subtitle">{current.subtitle}</p>

          <div className="carrusel_actions">
            <Link className="carrusel_button" to={current.ctaTo}>
              {current.ctaText}
            </Link>
          </div>
        </div>

        <button className="carrusel_arrow--left" onClick={goPrev} aria-label="Anterior">
          ‹
        </button>
        <button className="carrusel_arrow--right" onClick={goNext} aria-label="Siguiente">
          ›
        </button>

        <div className="carrusel_dots" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carrusel_dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir al slide ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </div>
      </section>
      <section className="filters" style={{ padding: 20 }}>
        <Filter
          label="Categoría:"
          value={category}
          options={CATEGORY_OPTIONS}
          onChange={setCategory}
        />
      </section>
      {loading && <p style={{ padding: 20 }}>Cargando...</p>}
      {error && <p style={{ padding: 20 }}>{error}</p>}

      {!loading && !error && (
        <section className="products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}
