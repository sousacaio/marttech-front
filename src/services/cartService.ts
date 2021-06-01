import { ICart } from "../interfaces/Cart/Cart";
import apiService, { ApiService } from "./apiService";

class CartService {
    constructor(private apiService: ApiService) { }
    async findAll(): Promise<ICart[]> {
        let res = await this.apiService.get('/cart', null)
        return res.data
    }
    async findOne(id: number): Promise<ICart> {
        let res = await this.apiService.get('/cart/', id)
        return res.data
    }
    async create(body: Partial<ICart>): Promise<ICart> {
        let res = await this.apiService.post('/cart', body)
        return res.data
    }
    async pach(body: Partial<ICart>): Promise<ICart> {
        let res = await this.apiService.patch('/cart', body)
        return res.data
    }
}

const cartService = new CartService(apiService);
export default cartService;