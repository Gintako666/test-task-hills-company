interface ApiErrorInterface {
  status: number;
  errors: Record<string, any> | unknown;
}

export class ApiError extends Error implements ApiErrorInterface {
  status: number;
  errors: Record<string, any> | unknown;

  constructor(
    status: number,
    message: string,
    errors: Record<string, any> | unknown = {},
  ) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors: Record<string, any> | unknown) {
    return new ApiError(400, message, errors);
  }

  static NotFound() {
    return new ApiError(404, 'Not found');
  }
}
