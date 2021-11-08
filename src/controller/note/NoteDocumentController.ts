import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Note } from "src/model/entity/note/Note";

export class NoteDocumentController
{
  noteDocumentRepository = getRepository(Note);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.noteDocumentRepository.findOne(request.params.id);
  }

}
