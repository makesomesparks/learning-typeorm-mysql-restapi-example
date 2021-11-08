import { NextFunction, Request, Response } from "express";
import { User } from "src/model/entity/user/User";
import { StringUtils } from "src/util/StringUtils";
import { UserUtils } from "src/util/UserUtils";
import { getRepository } from "typeorm";

export class AuthController
{
    userRepository = getRepository(User);

    async signUp(request: Request, response: Response, next: NextFunction)
    {
        const { email, passowrd, id } = request.body;

        StringUtils.regex.isValidEmail(email);

        const checkEmailExist = await UserUtils.checkExistUserEmail(email);

        if (checkEmailExist == 'exist-verified')
        {

        }

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