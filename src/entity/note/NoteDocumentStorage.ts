import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Note } from "./Note";
import { NoteDocument } from "./NoteDocument";

@Entity({ name: "tb_note_document_storage" })
export class NoteDocumentStorage
{
  @PrimaryColumn("varchar", { name: "note_document_storage_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  setUid()
  {
    this.uid = "generate_uid('tb_note_document_storage')";
  }

  @Column('varchar', { name: "note_document_uid", length: 15 })
  documentUid: string;

  @Column('longtext', { name: "note_document_storage_data", default: '' })
  data: string;

  @CreateDateColumn({ name: "note_document_storage_timestam_create", default: () => "CURRENT_TIMESTAMP(6)" })
  timestamp: Date;

  @ManyToOne(() => NoteDocument, noteDocument => noteDocument.documentStorage)
  noteDocument: NoteDocument;
}
