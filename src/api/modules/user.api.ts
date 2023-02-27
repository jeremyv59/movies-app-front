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

interface IUserLogParams {
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
  signin: async ({
    username,
    password,
  }: IUserLogParams): Promise<Response | unknown> => {
    try {
      const response: Response = await publicClient.post(userEndpoints.signin, {
        username,
        password,
      });

      return { response };
    } catch (err: unknown) {
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
