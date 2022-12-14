import axios from "axios";

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps extends LoginProps {
  name: string;
  repeatPassword: string;
}

interface ActivateProps {
  token: string | undefined;
}

const API_URL = "http://localhost:8080";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

const register = ({ name, email, password, repeatPassword }: RegisterProps) => {
  return axios({
    method: "post",
    url: `${API_URL}/api/v1/registration`,
    headers: { "Content-Type": "application/json" },
    data: {
      name,
      email,
      password,
      repeatPassword,
    },
  });
};

const login = ({ email, password }: LoginProps) => {
  return axios({
    method: "post",
    url: `${API_URL}/api/v1/login`,
    headers: { "Content-Type": "application/json" },
    data: {
      email,
      password,
    },
    withCredentials: true,
  });
};

const activate = ({ token }: ActivateProps) => {
  return axios({
    method: "get",
    url: `${API_URL}/api/v1/activate/${token}`,
    headers: { "Content-Type": "application/json" },
  });
};

const confirmUser = ({ token }: ActivateProps) => {
  return axios({
    method: "get",
    url: `${API_URL}/api/v1/user`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
};

const authService = {
  register,
  login,
  activate,
  confirmUser,
};
export default authService;
