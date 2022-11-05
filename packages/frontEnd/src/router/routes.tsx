interface IRoutes {
  HOME: string;
  AUTH: string;
  ADMIN: string;
  CHANGE_PASSWORD: string;
  LOGIN: string;
}

export const ROUTES: IRoutes = {
  HOME: "/",
  AUTH: "/activate/:token",
  ADMIN: "/account",
  CHANGE_PASSWORD: "change-password",
  LOGIN: "/login",
};
