export interface HttpRequest {
  body?: any
  params?: any
  headers?: any
}

export interface HttpResponse {
  status: number
  body: any
}
