import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { UniqueUid } from "src/model/entity/unique/UniqueUid";

export class UniqueUidController
{
  uniqueUidRepository = getRepository(UniqueUid);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.uniqueUidRepository.findOne(request.params.id);
  }

}
