import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserPassword } from "src/model/entity/user/UserPassword";

export class UserPasswordController
{
    userPasswordRepository = getRepository(UserPassword);

    async sample(request: Request, response: Response, next: NextFunction)
    {
        return this.userPasswordRepository.findOne(request.params.id);
    }

}
