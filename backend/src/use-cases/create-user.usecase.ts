import { UserRepository } from "@/database/user-repository";
import { User } from "@prisma/client";
import { UseCase } from "./usecase";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

interface CreateUserUseCaseRequestProps {
  email: string
}

interface CreateUserUseCaseResponseProps { 
  user: User
}

export class CreateUserUseCase implements UseCase<CreateUserUseCaseRequestProps, CreateUserUseCaseResponseProps> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ email }: CreateUserUseCaseRequestProps): Promise<CreateUserUseCaseResponseProps> {

    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if(userAlreadyExists) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.userRepository.create({ email })

    return { user }
  }
}