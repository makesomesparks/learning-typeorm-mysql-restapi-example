import { NextFunction, Request, Response } from "express";

import { StringUtils } from "src/utils/StringUtils";
import { User } from "src/model/entity/user/User";
import { UserRepository } from "src/repository/user/UserRepository";
import { ViewUser } from "src/model/entity/view/ViewUser";
import { getRepository } from "typeorm";

export class AuthController
{
    userRepository = getRepository(User);

    async signUp(request: Request, response: Response, next: NextFunction)
    {
        const { email, passowrd, id } = request.body;

        StringUtils.regex.isValidEmail(email);

        const user: ViewUser = await UserRepository.getUserEmail(email);

        return this.userRepository.createQueryBuilder().where("")
    }

    async signIn(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.findOne(request.params.id);
    }

    async signOut(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.save(request.body);
    }

    async thirdParty(request: Request, response: Response, next: NextFunction)
    {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}