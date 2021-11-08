import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, PrimaryColumn } from "typeorm";
import { Note } from "./Note";

@Entity({ name: "tb_note_status" })
export class NoteStatus {

  // # PK
  @PrimaryColumn("varchar", { name: "note_status_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_note_status') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # FK
  @Column('varchar', { name: "note_uid", nullable: false, length: 15 })
  noteUid: string;


  // # Column
  @Column('bit', { name: "note_status_is_public", default: () => 0 })
  isPublic: boolean;

  @Column('bit', { name: "note_status_is_invisible", default: () => 0 })
  isInvisible: boolean;

  @Column('bit', { name: "note_status_is_delete", default: () => 0 })
  isDelete: boolean;

  @Column('bit', { name: "note_status_is_expire", default: () => 0 })
  isExpire: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "note_status_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;

  @CreateDateColumn({ type: 'datetime', name: "note_status_time_delete", default: () => "CURRENT_TIMESTAMP(6)" })
  timeDelete: Date;


  // # Relation n:1
  @ManyToOne(() => Note, note => note.status)
  note: Note;
}
