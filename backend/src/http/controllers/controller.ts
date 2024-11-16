import { HttpRequest, HttpResponse } from "@/ports/http";

export interface IController {
  handle(props: HttpRequest): Promise<HttpResponse>
}