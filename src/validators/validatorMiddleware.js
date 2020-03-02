import { validationResult } from "./";
import { RequestValidationError } from "@core/error/request-body-error";

const checkAndThrowErrorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
  }
  next();
}

const validatorMiddleWare = (...validators) => {
  return validators.concat(checkAndThrowErrorMiddleware);
}

export default validatorMiddleWare
