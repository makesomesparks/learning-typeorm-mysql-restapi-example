import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { TagNote } from "src/model/entity/tag/TagNote";

export class TagNoteController
{
  tagNoteRepository = getRepository(TagNote);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.tagNoteRepository.findOne(request.params.id);
  }

}
