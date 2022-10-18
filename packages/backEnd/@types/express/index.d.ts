export {};
declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

declare module "express-session" {
  export interface SessionData {
    user: string;
  }
}
