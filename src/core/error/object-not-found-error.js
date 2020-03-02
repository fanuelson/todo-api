import { BusinessError } from "./business-error";

export class ObjectNotFoundError extends BusinessError {

  constructor() {
      super(404, 404, null, 'Objeto não encontrado');
  }

}
