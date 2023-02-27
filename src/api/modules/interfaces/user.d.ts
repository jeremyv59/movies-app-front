interface IUserEndpoints {
  signin: string;
  signup: string;
  getInfo: string;
  passwordUpdate: string;
}

interface ISigninParams {
  username: string;
  password: string;
}

interface ISignupParams {
  username: string;
  password: string;
  confirmPassword: string;
  displayName: string;
}

interface IPwdUpdateParams {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

export { IUserEndpoints, ISigninParams, ISignupParams, IPwdUpdateParams };
