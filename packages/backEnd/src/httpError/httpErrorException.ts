export class HttpError extends Error {
  constructor(readonly msg: string, public readonly statusCode: number) {
    super(msg);
  }
}
