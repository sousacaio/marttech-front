import { SignUpUser } from "../interfaces/Auth/Signup";
import { IUser } from "../interfaces/User/User";
import apiService, { ApiService } from "./apiService";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

class UserService {
    constructor(private apiService: ApiService) { }
    async create(credentials: SignUpUser): Promise<IUser> {
        let res = await this.apiService.post('/users', credentials)
        console.log(res)
        if (res.data.message === 'Email already in use') {
            MySwal.fire({
                title: 'Email em uso!',
                titleText: 'Email já está em uso!',
                backdrop: true,
                confirmButtonColor: 'black',
            });
        }
        if (res.response === 201) {
            MySwal.fire({
                title: 'Usuário criado!',
                titleText: 'Faça login com as suas credenciais!',
                backdrop: true,
                confirmButtonColor: 'black',
            });
        }


        return res.data
    }
}

const userService = new UserService(apiService);
export default userService;