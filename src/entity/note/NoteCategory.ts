import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Note } from "./Note";

@Entity({ name: "tb_note_category" })
export class NoteCategory
{
  @PrimaryColumn("varchar", { name: "note_category_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  setUid()
  {
    this.uid = "generate_uid('tb_note_category')";
  }

  @Column('varchar', { name: "note_category_name", length: 100 })
  name: string;

  @Column('varchar', { name: "note_category_description", length: 250 })
  description: string;

  @Column('bit', { name: "note_category_is_deprecate" })
  isDeprecate: boolean;

  @CreateDateColumn({ name: "note_category_timestamp_create", default: () => "CURRENT_TIMESTAMP(6)" })
  timestamp: Date;

  @OneToMany(() => Note, note => note.noteCategory)
  note: Note;
}
