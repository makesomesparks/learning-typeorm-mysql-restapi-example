import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../user/User";
import { Note } from "./Note";
import { NoteCategory } from "./NoteCategory";
import { NoteDocumentStorage } from "./NoteDocumentStorage";
import { NoteStatus } from "./NoteStatus";

@Entity({ name: "tb_note_document" })
export class NoteDocument {
  @PrimaryColumn("varchar", { name: "note_document_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  setUid() {
    this.uid = "generate_uid('tb_note_document')";
  }

  @Column("varchar", { name: "note_uid", length: 15, nullable: false })
  noteUid: string;

  @Column("varchar", { name: "note_document_title", length: 100 })
  title: string;

  @Column("varchar", { name: "note_document_title_curl", length: 250, default: '' })
  titleCurl: string;

  @Column("text", { name: "note_document_body", default: "" })
  body: string;

  @CreateDateColumn({ name: "note_document_timestamp_create", default: () => "CURRENT_TIMESTAMP(6)" })
  timestamp: Date;

  @ManyToOne(() => Note, note => note.document)
  note: Note;

  documentStorage: NoteDocumentStorage;
}
