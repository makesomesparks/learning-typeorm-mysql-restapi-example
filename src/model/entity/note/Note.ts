import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { TagNote } from "src/model/entity/tag/TagNote";
import { User } from "src/model/entity/user/User";
import { NoteCategory } from "./NoteCategory";
import { NoteDocument } from "./NoteDocument";
import { NoteStatus } from "./NoteStatus";

@Entity({ name: "tb_note" })
export class Note {

  // # PK
  @PrimaryColumn("varchar", { name: "note_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_note') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # FK
  @Column("varchar", { name: "user_uid", length: 15, nullable: false })
  userUid: string;

  @Column("varchar", { name: "note_category_uid", length: 15, default: 'undefined' })
  noteCategoryUid: string;


  // Timestamp
  @CreateDateColumn({ type: 'datetime', name: "note_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.note)
  user: User;


  // # Relation 1:n
  @OneToMany(() => NoteDocument, document => document.note)
  document: NoteDocument;

  @OneToMany(() => NoteStatus, status => status.note)
  status: NoteStatus[];

  @OneToMany(() => TagNote, tagNote => tagNote.tag)
  tagNote: TagNote;


  // # Relation 1:1
  @ManyToOne(() => NoteCategory, noteCategory => noteCategory.note)
  noteCategory: NoteCategory;
}
