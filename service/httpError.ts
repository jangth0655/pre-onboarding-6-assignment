class HttpError extends Error {
  constructor(private statusCode: number, public message: string) {
    super(message);
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 400:
        this.message = 'error';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}

export default HttpError;
