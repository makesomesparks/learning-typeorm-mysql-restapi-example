import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "src/model/entity/user/User";
import { Note } from "./Note";
import { NoteCategory } from "./NoteCategory";
import { NoteDocumentStorage } from "./NoteDocumentStorage";
import { NoteStatus } from "./NoteStatus";

@Entity({ name: "tb_note_document" })
export class NoteDocument {

  // # PK
  @PrimaryColumn("varchar", { name: "note_document_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_note_document') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # FK
  @Column("varchar", { name: "note_uid", length: 15, nullable: false })
  noteUid: string;


  // # Column
  @Column("varchar", { name: "note_document_title", length: 100 })
  title: string;

  @Column("varchar", { name: "note_document_title_curl", length: 250, default: '' })
  titleCurl: string;

  @Column("text", { name: "note_document_body", default: "" })
  body: string;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "note_document_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;


  // Relation n:1
  @ManyToOne(() => Note, note => note.document)
  note: Note;


  // Relation 1:n
  @OneToMany(() => NoteDocumentStorage, storage => storage.document)
  storage: NoteDocumentStorage;
}
