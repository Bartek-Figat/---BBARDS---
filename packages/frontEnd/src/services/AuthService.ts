import axios from "axios";

const API_URL = "http://localhost:8080";

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

const register = ({ name, email, password, repeatPassword }: RegisterProps) => {
  return axios({
    method: "post",
    url: `${API_URL}/api/v1/users`,
    headers: { "Content-Type": "application/json" },
    data: {
      name: name,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    },
  });
};

const login = ({ email, password }: LoginProps) => {
  return axios({
    method: "post",
    url: `${API_URL}/api/v1/auth`,
    headers: { "Content-Type": "application/json" },
    data: {
      email: email,
      password: password,
    },
    withCredentials: true,
  });
};

const activate = ({ token }: ActivateProps) => {
  return axios({
    method: "get",
    url: `${API_URL}/api/v1/users/activate/${token}`,
    headers: { "Content-Type": "application/json" },
  });
};

const authService = {
  register,
  login,
  activate,
};
export default authService;
