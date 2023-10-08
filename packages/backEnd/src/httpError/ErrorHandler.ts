import { Response, Request, NextFunction } from "express";

export class HttpError extends Error {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly fields: any;
  constructor(statusCode: number, name: string, fields: any) {
    super();
    this.statusCode = statusCode;
    this.name = name;
    this.fields = fields;
  }
}

export class BadRequest extends HttpError {
  /**
   * Bad Request: The server couldn’t resolve the request because of invalid syntax.
   *
   * Example:  throw new BadRequest('Bad Request');
   */
  constructor(fields?: any) {
    super(400, "Bad Request", fields);
  }
}

export class Unauthorized extends HttpError {
  /**
   * Unauthorized: The client should authenticate itself to get the requested response.
   *
   * Example:  throw new Unauthorized('Unauthorized');
   */
  constructor(fields?: any) {
    super(401, "Unauthorized", fields);
  }
}

export class Forbidden extends HttpError {
  /**
   * Forbidden: The client does not have the access right for the
   * content. Unlike 401, the identity of the client is known by the server.
   *
   * Example:  throw new Forbidden('Forbidden');
   */
  constructor(fields?: any) {
    super(403, "Forbidden", fields);
  }
}

export class NotFound extends HttpError {
  /**
   * Not Found: The server can not find the requested resource.
   *
   * Example:  throw new NotFound('Not Found');
   */
  constructor(fields?: any) {
    super(404, "Not Found", fields);
  }
}

export class InternalServerError extends HttpError {
  /**
   * Internal Server Error: Server has faced an erroneous situation
   * and it does not know how to handle that.
   *
   * Example:  throw new InternalServerError('Internal Server Error');
   */
  constructor(fields?: any) {
    super(500, "Internal Server Error", fields);
  }
}

export function errorHandler(
  err: unknown | HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response | void {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      message: err.message,
      fields: err?.fields,
    });
  }

  // If it's not an instance of HttpError, it's an unexpected error
  return res.status(500).json({
    message: "Unexpected error occurred",
  });
}
