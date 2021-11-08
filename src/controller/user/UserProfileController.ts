import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserProfile } from "src/model/entity/user/UserProfile";

export class UserProfileController
{
    userProfileRepository = getRepository(UserProfile);

    async sample(request: Request, response: Response, next: NextFunction)
    {
        return this.userProfileRepository.findOne(request.params.id);
    }

}
