import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosApiInstance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/",
  method: "GET",
  headers: {
    "X-API-KEY": "992d39b4-9cf2-4a5a-b0f2-3c3fa2df9f90",
    "Content-Type": "application/json",
  },
});

class Api {
  async fetchData(url: string, params?: any) {
    return await axiosApiInstance
      .get(url, {
        headers: {
          customHeader:
            url === "/top" ? "FetchTopFilms" : "FetchCurrentFilmData",
        },
        params,
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(response: AxiosResponse) {
    return {
      status: response.status,
      dataArray: response.data,
    };
  }
  private handleError(err: AxiosError) {
    return {
      status: err.response?.status,
      errorText: err.message,
    };
  }
}

export default new Api();
