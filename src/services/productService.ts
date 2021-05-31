import { IProduct } from "../interfaces/Products/Product";
import apiService, { ApiService } from "./apiService";

class ProductService {
    constructor(private apiService: ApiService) { }
    async findAll(): Promise<IProduct[]> {
        let res = await this.apiService.get('/products', null)
        return res.data
    }
}

const productService = new ProductService(apiService);
export default productService;