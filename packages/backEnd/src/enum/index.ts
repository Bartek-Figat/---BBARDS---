export enum Index {
  Users = "users",
  Db = "test",
}

export enum StatusCode {
  SUCCESS = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorMessage {
  WRONG = "Something went wrong.",
  AGAIN = "Something went wrong please try again",
  BEDREQ = "Bad request",
  NOT_FOUND = "NOT_FOUND",
}
