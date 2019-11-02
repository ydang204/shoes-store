import axios, { AxiosResponse, AxiosInstance } from "axios";
import qs from "qs";

import API_URL from "../constants/url-config";
import { authorizationHeader } from "./helpers";

const axiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_URL,
    headers: Object.assign({}, authorizationHeader())
  });
  return instance;
};

export const getAsync = (
  url: string,
  params?: object
): Promise<AxiosResponse> => {
  return axiosInstance().get(url, {
    params: params,
    paramsSerializer: function(params) {
      return qs.stringify(params, { arrayFormat: "repeat" });
    }
  });
};

export const postAsync = (
  url: string,
  json: object,
  file?: any
): Promise<AxiosResponse> => {
  if (file !== undefined) {
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return axiosInstance().post(url, formData, config);
  } else {
    return axiosInstance().post(url, json);
  }
};

export const putAsync = (url: string, json: object): Promise<AxiosResponse> => {
  return axiosInstance().put(url, json);
};

export const deleteAsync = (url: string): Promise<AxiosResponse> => {
  return axiosInstance().delete(url);
};

export const downloadAsync = (
  url: string,
  params?: object
): Promise<AxiosResponse> => {
  const instance = axios.create({
    baseURL: API_URL,
    headers: Object.assign({}, authorizationHeader()),
    responseType: "blob"
  });
  return instance.get(url, { params: params });
};
