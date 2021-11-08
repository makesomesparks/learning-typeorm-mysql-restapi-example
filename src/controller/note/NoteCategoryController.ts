import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { NoteCategory } from "src/model/entity/note/NoteCategory";

export class NoteCategoryController
{
  noteCategoryRepository = getRepository(NoteCategory);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.noteCategoryRepository.findOne(request.params.id);
  }

}
