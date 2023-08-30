import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export const customAxios = axios.create({
  baseURL: "http://13.125.162.181:8080",
  headers: {
    Access_Token: `${
      typeof window != "undefined" ? localStorage.getItem("accessToken") : ""
    }`,
  },
});
customAxios.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken == "") {
    console.log(localStorage.getItem("accessToken"));
    config.headers.common["Access_Token"] = accessToken;
  }
  return config;
});

//200번대 응답이 아닐 경우 error
customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response: status } = error;
    //401 = 토큰 만료
    if (status == 401) {
      const originRequest = config;
      //refreshToken
      const refreshToken = getCookie("refreshToken");
      const response = await axios.post(
        "http://13.125.162.181:8080/refreshToken",
        {
          headers: {
            Refresh_Token: `${refreshToken}`,
          },
        }
      );
      //refreshToken 요청 성공
      if (response.status === 201) {
        const newToken = response.data;
        console.log(response);
        localStorage.setItem("accessToken", newToken);
        customAxios.defaults.headers.common.Access_Token = `${newToken}`;
        originRequest.headers.Access_Token = `${newToken.accessToken}`;
        return axios(originRequest);
      } else if (response.status === 401) {
        alert("로그인 실패");
        window.location.replace("@pages/");
      } else {
        alert("오류가 발생했습니다. 재시도 해주세요");
      }
    }
    return Promise.reject(error);
  }
);
