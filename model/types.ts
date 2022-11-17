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

export type AccountStatusType = {
  관리자확인필요?: number;
  입금대기?: number;
  운용중?: number;
  투자중지?: number;
  해지?: number;
};
