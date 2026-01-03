import axios from "axios";

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    images: string[];
};

type ProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 8000,
  });
  
  export async function getProducts(): Promise<Product[]> {
    const res = await api.get<ProductsResponse>("/products?limit=300");
    return res.data.products;
  }

export async function getProductById(id: number): Promise<Product> {
    const res = await api.get<Product>(`/products/${id}`);
    return res.data;
  }
  
  export async function getCategories(): Promise<string[]> {
    const res = await api.get<string[]>("/products/categories");
    return res.data;
  }
  
  export async function getProductsByCategory(category: string): Promise<Product[]> {
    const res = await api.get<ProductsResponse>(`/products/category/${category}`);
    return res.data.products;
  }