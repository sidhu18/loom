import ApiService from "../base/api.service";

const PRODUCT_API_ENDPOINT = '/products';

class ProductService extends ApiService {

    async get<Product>(): Promise<Product> {
        return this._get<Product>(PRODUCT_API_ENDPOINT);
    }
}

export default new ProductService();
