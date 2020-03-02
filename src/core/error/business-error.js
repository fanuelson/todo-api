export class BusinessError extends Error {

    constructor(httpStatus, internalCode, payload, message = 'Business Error') {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.httpStatus = httpStatus;
        this.message = message;
        this.internalCode = internalCode;
        this.payload = payload;
        this.isBusinessError = true;
    }

}
