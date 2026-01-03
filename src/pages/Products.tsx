import { useEffect, useMemo, useState } from "react";
import { getProducts, getCategories, type Product, type Category } from "../data/DummyJSON";
import "./Home.css";

import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import Search from "../components/Search";
import SortOrder from "../components/SortOrder";

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

type SortOrder = "asc" | "desc";
type Option = { label: string; value: string };

export default function Home() {

    // PRODUCTOS --------------------------------------------------------------------
    const [products, setProducts] = useState<Product[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [errorProducts, setErrorProducts] = useState<string | null>(null);

    useEffect(() => {
        setLoadingProducts(true);
        setErrorProducts(null);
    
        getProducts()
          .then((data) => {
            setProducts(data);
            setLoadingProducts(false);
          })
          .catch(() => {
            setErrorProducts("No se han podido cargar los productos.");
            setLoadingProducts(false);
          });
      }, []);


    const fashionProducts = useMemo(() => {
        return products.filter((p) => FASHION_CATEGORIES.has(p.category));
    }, [products]);

    // CATEGORÍAS ------------------------------------------------------------------
    const [categories, setCategories] = useState<Category[]>([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [errorCategories, setErrorCategories] = useState<string | null>(null);

    useEffect(() => {
        setLoadingCategories(true);
        setErrorCategories(null);

        getCategories()
            .then((data) => {
                const fashion = data.filter((c) => FASHION_CATEGORIES.has(c.slug));
                setCategories(fashion);
                setLoadingCategories(false);
            })
            .catch(() => {
                setErrorCategories("No se han podido cargar las categorías.");
                setLoadingCategories(false);
            });
    }, []);

    const categoryOptions: Option[] = useMemo(() => {
        return [
            { label: "All", value: "all" },
            ...categories.map((c) => ({
                label: c.name,
                value: c.slug,
            })),
        ];
    }, [categories]);

    // FILTROS --------------------------------------------------------------------
    const [category, setCategory] = useState<string>("all");

    const filteredProducts = useMemo(() => {
        if (category === "all") return fashionProducts;
        return fashionProducts.filter((p) => p.category === category);
    }, [fashionProducts, category]);

    // BUSCADOR  Y ORDENAR --------------------------------------------------------------------
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

    const searchedProducts = useMemo(() => {
        const text = search.trim().toLowerCase();
        let result = filteredProducts;

        if (text !== "") {
            result = result.filter((p) =>
                p.title.toLowerCase().includes(text));
        }

        result = [...result].sort((a, b) => {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });

        return result;
    }, [filteredProducts, search, sortOrder]);


    return (
        <main>
            <section className="controls" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                <section className="filters" style={{ padding: 20 }}>
                    {loadingCategories && <p style={{ margin: 0 }}>Cargando categorías...</p>}
                    {errorCategories && <p style={{ margin: 0 }}>{errorCategories}</p>}

                    {!loadingCategories && !errorCategories && (
                        <Filter
                            label="Categoría:"
                            value={category}
                            options={categoryOptions}
                            onChange={setCategory}
                        />
                    )}
                </section>
                <section className="Search">
                    <Search value={search} onChange={setSearch} />
                </section>
                <section className="Order" style={{ padding: 20, display: "flex", gap: 12 }}>
                    <SortOrder value={sortOrder} onChange={setSortOrder} />
                </section>
            </section>

            {loadingProducts && <p style={{ padding: 20 }}>Cargando...</p>}
            {errorProducts && <p style={{ padding: 20 }}>{errorProducts}</p>}

            {!loadingProducts && !errorProducts && (
                <section className="products">
                    {searchedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            )}
        </main>
    );
}
