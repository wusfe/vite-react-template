export interface LoginReqProps {
  account: string;
  passowrd: string;
  captcha: string;
  captcha_id: string;
}

export interface LoginResProps {
  accessToken: string;
  tokenType: string;
}

