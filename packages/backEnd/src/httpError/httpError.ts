export class HttpResponse<T = {}> {
  constructor(
    public data: T,
    public readonly error: any,
    public readonly statusCode: number
  ) {}

  static sucess<T = {}>(data: T, statusCode: number, error: any) {
    return new HttpResponse(data, error, statusCode);
  }

  static failed(error: any, statusCode: number) {
    return new HttpResponse(null, error, statusCode);
  }
}

export class ApiError extends Error {
  readonly statusCode;
  constructor(name: string, statusCode: number, message?: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export class HttpError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class InternalServerError extends HttpError {
  constructor(message: string) {
    super(message, 500);
  }
}
