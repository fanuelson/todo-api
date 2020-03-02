import express from 'express';
import asyncMiddleware from './asyncMiddleware';

const applyAsync = (handlers) => {
    let resultHandlers = [];

    for(const hand of handlers) {
        if(Array.isArray(hand)) {
            resultHandlers = resultHandlers.concat(applyAsync(hand));
        }else{
            resultHandlers.push( asyncMiddleware(hand))
        }
    }

    return resultHandlers;
}

const routerMethodAsync = (expressRouter, method) => {
    return (path, ...handlers) => {
        const handlersAsync = applyAsync(handlers);
        expressRouter[method](path, handlersAsync);
    }
}

const routerAsync = (expressRouter) => {
  return {
    post: routerMethodAsync(expressRouter, 'post'),
    get: routerMethodAsync(expressRouter, 'get'),
    put: routerMethodAsync(expressRouter, 'put'),
    delete: routerMethodAsync(expressRouter, 'delete'),
  }
}

export default routerAsync;