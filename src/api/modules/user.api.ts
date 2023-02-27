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

const userEndpoints: IUserEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
  getFavorites: "user/favorites",
  addFavorite: "user/favorites",
};
