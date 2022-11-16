/**
 * 회원가입 에러 메시지
 * 로그인 에러 메시지
 */

const SigInUpMessage = {
  AlreadyEmail: 'Email already exists',
  EmailFormat: 'Email format is invalid',
} as const;

const LoginMessage = {
  IncorrectPassword: 'Incorrect password',
  ShortPassword: 'Password is too short',
  NotExistUser: 'Cannot find user',
} as const;

class HttpError extends Error {
  constructor(public message: string) {
    super(message);
  }

  get sigInUp() {
    switch (this.message) {
      case SigInUpMessage.AlreadyEmail:
        this.message = '이미 이메일이 존재합니다.';
        break;
      case SigInUpMessage.EmailFormat:
        this.message = '이메일 형식에 맞지 않습니다.';
        break;
      default:
        break;
    }
    return this.message;
  }

  get login() {
    switch (this.message) {
      case LoginMessage.IncorrectPassword:
        this.message = '패스워드가 올바르지 않습니다.';
        break;
      case LoginMessage.NotExistUser:
        this.message = '사용자가 존재하지 않습니다.';
        break;
      case LoginMessage.ShortPassword:
        this.message = '패스워드가 너무 짧습니다.';
        break;
      default:
        break;
    }
    return this.message;
  }

  get expired() {
    switch (this.message) {
      case 'jwt expired':
        this.message = '시간이 오래 경과 되었습니다.';
        break;
      default:
        break;
    }
    return this.message;
  }
}

export default HttpError;
