export enum Index {
  Users = "users",
  Add = "advertising",
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
  SERVER_ERROR = "Server error",
}

export enum PricingPlan{
  FREE,
  STANDARD,
  PREMIUM
}

export enum StripeMode{
  ONE_TIME_PAYMENT = "payment",
  SUBSCRIPTION = "subscription"
}

export enum StripeStandardPlan{
  ONE_TIME_PAYMENT = "price_1LsVeFGesJo0OSWyczEu64pd",
  SUBSCRIPTION = "price_1LsVeFGesJo0OSWyvvFpUWPI"
}

export enum StripePremiumPlan{
  ONE_TIME_PAYMENT = "price_1LsWCUGesJo0OSWym4USUWfb",
  SUBSCRIPTION = "price_1LsWCUGesJo0OSWy7xXC0juv"
}