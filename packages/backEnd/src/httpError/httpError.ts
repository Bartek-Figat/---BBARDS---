export class HttpResponse<T = {}> {
  constructor(
    public data: T,
    public readonly error: string | null = null,
    public readonly statusCode: number
  ) {}

  static sucess<T = {}>(data: T, statusCode: number, error: any) {
    return new HttpResponse(data, error, statusCode);
  }

  static failed(error: any, statusCode: number) {
    return new HttpResponse(null, error, statusCode);
  }
}
