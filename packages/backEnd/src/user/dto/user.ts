import { ObjectId } from "mongodb";
export type Token = {
  decoded: {
    token: string | undefined;
  };
};

export interface User {
  email: string;
  name: string;
  lastLoggedIn: string;
  logOutDate: string;
  _id: ObjectId;
}

export type LogoutDto = {
  decoded: { token: string };
  authHeader: string;
};
