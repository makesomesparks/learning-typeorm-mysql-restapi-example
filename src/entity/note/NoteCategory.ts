import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, OneToMany, PrimaryColumn } from "typeorm";
import { Note } from "./Note";

@Entity({ name: "tb_note_category" })
export class NoteCategory {

  // # PK
  @PrimaryColumn("varchar", { name: "note_category_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_note_category') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # Column
  @Column('varchar', { name: "note_category_name", length: 100 })
  name: string;

  @Column('varchar', { name: "note_category_description", length: 250 })
  description: string;

  @Column('bit', { name: "note_category_is_deprecate", default: () => 0 })
  isDeprecate: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "note_category_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;


  // # Relation 1:1
  @OneToMany(() => Note, note => note.noteCategory)
  note: Note;
}
