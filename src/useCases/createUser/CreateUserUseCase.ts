import { User } from "../../entities/User";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";

interface CreateUserDTO {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUsersRepositories) {}

  async execute({ name, email }: CreateUserDTO) {
    let user = new User();

    user = Object.assign({
      ...user,
      name,
      email,
    });

    await this.userRepository.create(user);
  }
}

export { CreateUserUseCase };
