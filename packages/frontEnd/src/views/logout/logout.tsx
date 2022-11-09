import axios from "axios";

async function Logout() {
  await axios.get("http://localhost:8080/api/v1/logout", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  localStorage.removeItem("token");
  window.location.href = "/";
}

export default Logout;
