import { check, validationResult, param } from 'express-validator';

const checkIsRequired = (field) => {
  return check(field).isLength({ min: 1 }).withMessage('Campo obrigatório');
}

const checkParamIsNumber = (paramName) => {
  return param(paramName).isNumeric().withMessage('Parametro deve ser um número');
}

export {
  checkIsRequired,
  validationResult,
  checkParamIsNumber
}