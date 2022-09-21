import axios from "axios";

const API_URL = "http://localhost:8080";

const getPage = async (pageNumber: number) => {
  const data = await axios({
    method: "GET",
    url: `${API_URL}/api/v1/filter`,
    headers: { "Content-Type": "application/json" },
    params: {
      page: pageNumber,
    },
  });

  return data;
};

const adService = {
  getPage,
};
export default adService;
