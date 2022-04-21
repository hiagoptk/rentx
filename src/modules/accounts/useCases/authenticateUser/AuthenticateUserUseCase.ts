import { inject, injectable } from "tsyringe";


interface IRequest {
    email: string;
    password: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository {
        }
    )

    async execute({email, password}: IRequest) {
        
    }
}

export { AuthenticateUserUseCase };
