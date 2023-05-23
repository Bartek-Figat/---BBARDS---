import axios from "axios";

const API_URL = "http://localhost:8080";

interface PageRequestProps {
  page: number;
  price?: number;
  adCategory?: string;
  rate?: string;
  city?: string;
  priceCondition?: string;
  productCondition?: string;
}

const getPage = async (params: PageRequestProps) => {
  const data = await axios({
    method: "GET",
    url: `${API_URL}/api/v1/filter`,
    params,
  });

  return data;
};

const adService = {
  getPage,
};
export default adService;
