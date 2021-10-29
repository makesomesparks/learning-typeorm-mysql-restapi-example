import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "../user/User";
import { NoteCategory } from "./NoteCategory";
import { NoteDocument } from "./NoteDocument";
import { NoteStatus } from "./NoteStatus";

@Entity({ name: "tb_note" })
export class Note {
  @PrimaryColumn("varchar", { name: "note_uid", length: 15 })
  uid: string;
  storage: any;

  @BeforeInsert()
  setUid() {
    this.uid = "generate_uid('tb_note')";
  }

  @Column("varchar", { name: "user_uid", length: 15 })
  userUid: string;


  @Column("varchar", { name: "note_category_uid", length: 15, default: 'undefined' })
  noteCategoryUid: string;


  @CreateDateColumn({ name: "note_timestamp_create", default: () => "CURRENT_TIMESTAMP(6)" })
  timestamp: Date;

  @ManyToOne(() => User, user => user.note)
  user: User;

  @ManyToOne(() => NoteCategory, noteCategory => noteCategory.note)
  noteCategory: NoteCategory[];

  @OneToMany(() => NoteDocument, document => document.note)
  document: NoteDocument;

  status: NoteStatus;
}
