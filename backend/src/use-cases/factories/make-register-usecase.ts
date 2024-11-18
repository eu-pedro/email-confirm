import { PrismaUsersRepository } from "@/database/prisma/repositories/prisma-users-repository";
import { CreateUserUseCase } from "../create-user.usecase";
import { NodeMailer } from "@/lib/nodemailer";

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()

  const emailMailer = new NodeMailer()

  const registerUseCase = new CreateUserUseCase(usersRepository, emailMailer)

  return registerUseCase
}