export class ValidationErrorException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
