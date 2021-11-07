import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tag } from "../../entity/tag/Tag";

export class TagController
{
  tagRepository = getRepository(Tag);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.tagRepository.findOne(request.params.id);
  }

}
