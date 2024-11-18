export class EmailError extends Error {
  constructor() {
    super("Erro ao enviar o email")
  }
}