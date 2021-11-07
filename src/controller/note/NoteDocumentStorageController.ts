import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { NoteDocumentStorage } from "../../entity/note/NoteDocumentStorage";

export class NoteDocumentStorageController
{
  noteDocumentStorageRepository = getRepository(NoteDocumentStorage);

  async sample(request: Request, response: Response, next: NextFunction)
  {
    return this.noteDocumentStorageRepository.findOne(request.params.id);
  }

}
