export class BaseHttpResponse<T = {}> {
  constructor(
    public data: T,
    public readonly error: string | null = null,
    public readonly statusCode: number
  ) {}

  static sucessResponse<T = {}>(data: T, statusCode: number, error: any) {
    return new BaseHttpResponse(data, error, statusCode);
  }

  static failedResponse<T>(error: any, statusCode: number) {
    return new BaseHttpResponse(null, error, statusCode);
  }
}
