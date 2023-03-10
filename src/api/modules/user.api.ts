import privateClient from "../client/private.client";
import publicClient from "../client/public.client";
import {
  IUserEndpoints,
  ISigninParams,
  ISignupParams,
  IPwdUpdateParams,
} from "./interfaces/user";

const userEndpoints: IUserEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
};

const userApi = {
  signin: async ({
    username,
    password,
  }: ISigninParams): Promise<Response | unknown> => {
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
  signup: async ({
    username,
    password,
    confirmPassword,
    displayName,
  }: ISignupParams): Promise<Response | unknown> => {
    try {
      const response: Response = await publicClient.post(userEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (err: unknown) {
      return { err };
    }
  },
  getInfo: async (): Promise<Response | unknown> => {
    try {
      const response: Response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err: unknown) {
      return { err };
    }
  },
  updatePassword: async ({
    password,
    newPassword,
    confirmNewPassword,
  }: IPwdUpdateParams): Promise<Response | unknown> => {
    try {
      const response: Response = await privateClient.put(
        userEndpoints.passwordUpdate,
        {
          password,
          newPassword,
          confirmNewPassword,
        }
      );

      return { response };
    } catch (err: unknown) {
      return { err };
    }
  },
};

export default userApi;
