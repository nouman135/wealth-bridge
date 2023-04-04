import { axiosInstance, getAuthorizationHeader } from "../helper/http-common";

export default new (class AuthService {
  async getUsers() {
    try {
      const response = await axiosInstance.get("/auth/user", {
        headers: { Authorization: getAuthorizationHeader() },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
})();
