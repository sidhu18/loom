import { Product } from "./product.type";

class ProductService {

    static productServiceInstance: ProductService;

    public static createInstance() {
        if (ProductService.productServiceInstance) {
            return ProductService.productServiceInstance;
        }
        return new ProductService();
    }

    public getAll(): Product[] {
        return [
            {
                id: 4,
                title: "Handmade Fresh Table",
                slug: "handmade-fresh-table",
                price: 687,
                description: "Andy shoes are designed to keeping in...",
                category: {
                    id: 5,
                    name: "Others",
                    image: "https://placehold.co/600x400",
                    slug: "others"
                },
                images: [
                    "https://placehold.co/600x400",
                    "https://placehold.co/600x400",
                    "https://placehold.co/600x400"
                ]
            },
            {
                id: 5,
                title: "Handmade Fresh Cookies",
                slug: "handmade-fresh-table",
                price: 687,
                description: "Cookies designed to keeping in...",
                category: {
                    id: 5,
                    name: "Others",
                    image: "https://placehold.co/600x400",
                    slug: "others"
                },
                images: [
                    "https://placehold.co/600x400",
                    "https://placehold.co/600x400",
                    "https://placehold.co/600x400"
                ]
            }
        ]
    }
}

export default ProductService.createInstance();
