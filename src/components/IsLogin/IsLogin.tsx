import { getCookie } from "@/Utils/customAxios";

export const IsLogin = () => {
  const loginCheck = getCookie("refreshToken") !== undefined;
  return loginCheck;
};
