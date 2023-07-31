import { TokenManager } from "../TokenManager";

export const getHeadersWithToken = () => {
    return TokenManager.getToken();
  };