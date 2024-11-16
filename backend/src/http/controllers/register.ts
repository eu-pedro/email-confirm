import { makeRegisterUseCase } from "@/use-cases/factories/make-register-usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { IController } from "./controller";
import { HttpResponse } from "@/ports/http";
import { conflict, created } from "@/ports/http-helpers";
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error";


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

        throw error;
      }
  }
  
}