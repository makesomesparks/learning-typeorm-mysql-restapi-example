import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserThirdpartySignin } from "src/model/entity/user/UserThirdpartySignin";

export class UserThirdpartySigninController
{
  userThirdpartySigninRepository = getRepository(UserThirdpartySignin);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.userThirdpartySigninRepository.findOne(request.params.id);
  }

}
