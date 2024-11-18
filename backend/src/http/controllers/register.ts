import { makeRegisterUseCase } from "@/use-cases/factories/make-register-usecase";
import { z } from "zod";
import { IController } from "./controller";
import { HttpResponse } from "@/ports/http";
import { conflict, created, serverError } from "@/ports/http-helpers";
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error";
import { EmailError } from "@/use-cases/errors/email-error";


export class RegisterController implements IController {
  async handle({ body }: HttpResponse): Promise<HttpResponse> {
      const registerBodySchema = z.object({
        email: z.string().email(),
        username: z.string()
      })

      const { email } = registerBodySchema.parse(body)

      try {
        const registerUseCase = makeRegisterUseCase()

        await registerUseCase.execute({ email })

        return created()
      } catch (error) {
        if(error instanceof UserAlreadyExistsError) {
          return conflict(error.message)
        }

        if(error instanceof EmailError) {
          return serverError({
            body: "Ocorreu um erro ao enviar o email!"
          })
        }

        throw error;
      }
  }
  
}