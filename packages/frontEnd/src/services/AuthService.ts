import axios from "axios";

const API_URL = "http://localhost:8080";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
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

const authService = {
  register,
};
export default authService;
