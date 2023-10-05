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
   * @requires message
   * @type message: string //
   * @type statusCode: number // 400
   * @type name: string // Bad Request
   */
  constructor(fields?: any) {
    super(400, "Bad Request", fields);
  }
}

export class Unauthorized extends HttpError {
  /**
   * Unauthorized: The client should authenticate itself to get the requested response.
   *
   * Example:  throw new BadRequest('Unauthorized');
   * @requires message
   * @type message: string
   * @type statusCode: number
   * @type name: string
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
   * Example:  throw new BadRequest('Forbidden');
   * @requires message
   * @type message: string
   * @type statusCode: number
   * @type name: string
   */
  constructor(fields?: any) {
    super(403, "Forbidden", fields);
  }
}

export class NotFound extends HttpError {
  /**
   * Not Found: The server can not find the requested resource.
   *
   * Example:  throw new BadRequest('Not Found');
   * @requires message
   * @type message: string
   * @type statusCode: number
   * @type name: string
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
   * Example:  throw new BadRequest('Internal Server Error);
   * @requires message
   * @type message: string
   * @type statusCode: number
   * @type name: string
   */
  constructor(fields?: any) {
    super(500, "Internal Server Error", fields);
  }
}

export function errorHandler(
  err: unknown | HttpError,
  _req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (err instanceof BadRequest) {
    return res.status(err.statusCode).json({
      fields: err?.fields,
    });
  }

  if (err instanceof Unauthorized) {
    return res.status(err.statusCode).json({
      fields: err?.fields,
    });
  }

  if (err instanceof Forbidden) {
    return res.status(err.statusCode).json({
      fields: err?.fields,
    });
  }

  if (err instanceof NotFound) {
    console.log(err);
    return res.status(err.statusCode).json({
      fields: err?.fields,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
}
