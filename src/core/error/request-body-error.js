import { BusinessError } from "./business-error";

export class RequestValidationError extends BusinessError {

  constructor(errors) {
      super(422, 1, {errors}, 'Request body validation error');
  }

}
