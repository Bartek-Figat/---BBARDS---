interface IRoutes {
  HOME: string;
  AUTH: string;
  ADMIN: string;
  REGISTER: string;
  CHANGE_PASSWORD: string;
  LOGIN: string;
  LOGOUT: string;
  ACCOUNT: string;
  ORDERS: string;
  ACCOUNT_SETTING: string;
  ADDRESS: string;
  PAYMENT: string;
  HELP_CENTER: string;
  LEGAL_NOTICE: string;
  NOTIFICATION: string;
  WISHLIST: string;
}

export const ROUTES: IRoutes = {
  HOME: "/",
  AUTH: "/activate/:token",
  ADMIN: "/account",
  REGISTER: "/register",
  CHANGE_PASSWORD: "change-password",
  LOGIN: "/login",
  LOGOUT: "/logout",
  ACCOUNT: "/account/account-settings",
  ORDERS: "orders",
  ACCOUNT_SETTING: "account-settings",
  ADDRESS: "address",
  PAYMENT: "payment",
  HELP_CENTER: "help-center",
  LEGAL_NOTICE: "legal-notice",
  NOTIFICATION: "notification",
  WISHLIST: "wishlist",
};
