import { UserPostgresRepository } from "../../repositories/implementations/UsersPostgresRepositories";
import { FindByIdController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

const usersRepository = new UserPostgresRepository();
const findUserByIdUseCase = new FindUserByIdUseCase(usersRepository);
const findUserByIdController = new FindByIdController(findUserByIdUseCase);

export { findUserByIdController };
