import { FastifyReply, FastifyRequest } from "fastify";
import { IController } from "../controllers/controller";

export function adaptRoute(controllerFactory: () => IController){
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const body = request.body
    const params = request.params
    const headers = request.headers
    const query = request.query

    const controller = controllerFactory()

    const result = await controller.handle({ body, params, headers })

    return reply.status(result.status).send(result.body)
  }
}