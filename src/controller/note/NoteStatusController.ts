import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { NoteStatus } from "src/model/entity/note/NoteStatus";

export class NoteStatusController
{
  noteStatusRepository = getRepository(NoteStatus);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.noteStatusRepository.findOne(request.params.id);
  }

}
