import { HttpResponse } from '@/ports/http'

export function created(body: any = {}): HttpResponse {
  return {
    status: 201,
    body
  }
}

export function ok(body: any = {}): HttpResponse {
  return {
    status: 200,
    body
  }
}

export function serverError(body: any): HttpResponse {
  return {
    status: 500,
    body: {
      name: 'InternalServerError',
      ...body
    }
  }
}

export function badRequest(error: Error): HttpResponse {
  return {
    status: 400,
    body: {
      name: error.name,
      message: error.message
    }
  }
}

export function unauthorized(message: string): HttpResponse {
  return {
    status: 401,
    body: {
      name: 'ForbidenAccess',
      message
    }
  }
}

export function notFound(message: string): HttpResponse {
  return {
    status: 404,
    body: {
      name: 'NotFound',
      message
    }
  }
}

export function conflict(message: string) {
  return {
    status: 409,
    body: {
      name: 'Conflict',
      message
    }
  }  
}
