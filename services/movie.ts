import axios from "axios";

export const getMovie = async () => {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const DATA_API = "/movie/popular";
  const QUERY_API = "?language=en-US&page=1";
  const response = await axios.get(`${ROOT_API}/${DATA_API}${QUERY_API}`);
  const axiosResponse = response.data;
  return axiosResponse;
};
