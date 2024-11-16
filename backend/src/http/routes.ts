import { FastifyInstance } from "fastify";
import {  RegisterController } from "./controllers/register";
import { adaptRoute } from "./adapters/adapt-route";

export async function appRoutes(app: FastifyInstance) {
  app.post("/user", adaptRoute(() => new RegisterController()))
}