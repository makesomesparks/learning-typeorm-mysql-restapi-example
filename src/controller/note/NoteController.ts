import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Note } from "src/model/entity/note/Note";

export class NoteController
{
  noteRepository = getRepository(Note);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.noteRepository.findOne(request.params.id);
  }

}
