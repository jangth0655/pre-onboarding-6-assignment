type User = {
  email: string;
  id: number;
};

export type AuthData = {
  accessToken: string;
  user: User;
};

export type SubmitData = {
  email: string;
  password: string;
};
