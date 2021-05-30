import { LoginCredentials } from "../interfaces/Auth/LoginCredentials";
import { ILogin } from "../interfaces/Auth/LoginInterface";
import apiService, { ApiService } from "./apiService";

class AuthService {
    constructor(private apiService: ApiService) { }
    async login(credentials: LoginCredentials): Promise<ILogin> {
        let res = await this.apiService.post('/auth', credentials)
        return res.data
    }
}

const authService = new AuthService(apiService);
export default authService;