import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(user_id: string): Promise<User>;
}

export { IUserRepository };
