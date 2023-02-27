import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

interface IUserEndpoints {
  signin: string;
  signup: string;
  getInfo: string;
  passwordUpdate: string;
  getFavorites: string;
  addFavorite: string;
}

interface SigninParams {
  username: string;
  password: string;
}

const userEndpoints: IUserEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
  getFavorites: "user/favorites",
  addFavorite: "user/favorites",
};

const userApi = {
  signin: async ({ username, password }: SigninParams) => {
    try {
      const response: Response = await publicClient.post(userEndpoints.signin, {
        username,
        password,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({}) => {
    try {
    } catch (err) {
      return { err };
    }
  },
};
