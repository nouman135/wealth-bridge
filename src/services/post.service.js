import { axiosInstance, getAuthorizationHeader } from "../helper/http-common";

class PostService {

  async getPosts() {
    try {
      const response = await axiosInstance.get("/posts", {
        headers: { Authorization: getAuthorizationHeader() },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

}

export default new PostService()