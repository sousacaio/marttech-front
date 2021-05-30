import axios from "axios";
import { API_ENDPOINT } from "../settings";

axios({ baseURL: API_ENDPOINT });

export class ApiService {
    constructor(private apiEndpoint: string) { }

    public async get(url: string, params?: any): Promise<any> {
        return await axios.get(`${API_ENDPOINT}${url}`, params)
    }
    public async post(url: string, body: any): Promise<any> {
        return await axios.post(`${API_ENDPOINT}${url}`, body)
    }
    
    public async patch(url: string, body: any): Promise<any> {

    }
    public async delete(url: string, params?: any): Promise<any> {

    }
}

const apiService = new ApiService(API_ENDPOINT);
export default apiService;
