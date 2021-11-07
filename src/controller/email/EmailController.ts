import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { AuthSignin } from "../../entity/auth/AuthSignin";

export class AuthController
{
  authSigninRepository = getRepository(AuthSignin);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.authSigninRepository.findOne(request.params.id);
  }

}
