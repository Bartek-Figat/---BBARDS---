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

const register = ({ name, email, password, repeatPassword }: RegisterProps) => {
  return axios({
    method: "post",
    url: `${API_URL}/api/v1/registration`,
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
    url: `${API_URL}/api/v1/login`,
    headers: { "Content-Type": "application/json" },
    data: {
      email: email,
      password: password,
    },
  });
};

const authService = {
  register,
  login,
};
export default authService;
