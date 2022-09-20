import axios from "axios";

const API_URL = "http://localhost:8080";

const getPage = (pageNumber: number) => {
  return axios({
    method: "GET",
    url: `${API_URL}/api/v1/filter`,
    headers: { "Content-Type": "application/json" },
    params: {
      page: pageNumber,
    },
  });
};

const adService = {
  getPage,
};
export default adService;
