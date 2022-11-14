export type User = {
  email: string;
  id: number;
};

export type UserInfo = {
  accessToken: string;
  user: User;
};

export type SubmitData = {
  email: string;
  password: string;
};
