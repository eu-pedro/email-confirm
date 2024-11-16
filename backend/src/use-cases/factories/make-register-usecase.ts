import { PrismaUsersRepository } from "@/database/prisma/repositories/prisma-users-repository";
import { CreateUserUseCase } from "../create-user.usecase";

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()

  const registerUseCase = new CreateUserUseCase(usersRepository)

  return registerUseCase
}