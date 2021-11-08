import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Note } from "./Note";
import { NoteDocument } from "./NoteDocument";

@Entity({ name: "tb_note_document_storage" })
export class NoteDocumentStorage {

  // # PK
  @PrimaryColumn("varchar", { name: "note_document_storage_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  setUid() {
    this.uid = "generate_uid('tb_note_document_storage')";
  }


  // # FK
  @Column('varchar', { name: "note_document_uid", length: 15 })
  documentUid: string;

  @Column('longtext', { name: "note_document_storage_data", default: '' })
  data: string;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "note_document_storage_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;


  // # Relation n:1
  @ManyToOne(() => NoteDocument, document => document.storage)
  document: NoteDocument;
}
