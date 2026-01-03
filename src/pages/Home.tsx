import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Carrusel1 from "../images/Carrusel-1.jpg"
import Carrusel2 from "../images/Carrusel-2.jpg"
import Carrusel3 from "../images/Carrusel-3.jpg"

import HomeImage1 from "../images/Home-image1.jpg"
import HomeImage2 from "../images/Home-image2.webp"
import HomeImage3 from "../images/Home-image3.webp"
import HomeImage4 from "../images/Home-image2.webp"

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaTo: string;
};

const HomeImage = [
  {
    src: HomeImage1,
    alt: "Hombre con chaqueta urbana negra",
  },
  {
    src: HomeImage2,
    alt: "Outfit streetwear temporada otoño",
  },
  {
    src: HomeImage3,
    alt: "Moda urbana femenina",
  },
  {
    src: HomeImage4,
    alt: "Detalles de prendas de temporada",
  },
];


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
      <section className="home_images">
        {HomeImage.map((img, index) => (
          <div key={index} className="home_image">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </section>

    </main>
  );
}
