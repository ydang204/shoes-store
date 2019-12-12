import { AxiosResponse } from "axios";

export const authorizationHeader = (): { [index: string]: string } => {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const fileDownloader = (
  response: AxiosResponse<any>,
  fileName: string
) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
};


export const currencyFormat = (price: number) => {
  return `${price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}₫`;
};