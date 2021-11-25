import { NextFunction, Request, Response } from "express";

import { AuthSignin } from "src/model/entity/auth/AuthSignin";
import { getRepository } from "typeorm";

export class AuthController
{
  authSigninRepository = getRepository(AuthSignin);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.authSigninRepository.findOne(request.params.id);
  }

}
