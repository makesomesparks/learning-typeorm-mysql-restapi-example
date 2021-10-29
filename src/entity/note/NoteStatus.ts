import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Note } from "./Note";

@Entity({ name: "tb_note_status" })
export class NoteStatus
{
  @PrimaryColumn("varchar", { name: "note_status_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  setUid()
  {
    this.uid = "generate_uid('tb_note_status')";
  }

  @Column('varchar', { name: "note_uid", nullable: false, length: 15 })
  noteUid: boolean;

  @Column('bit', { name: "note_status_is_public"})
  isPublic: boolean;

  @Column('bit', { name: "note_status_is_invisible" })
  isInvisible: boolean;

  @Column('bit', { name: "note_status_is_delete" })
  isDelete: boolean;

  @CreateDateColumn({ name: "note_status_timestamp_create", default: () => "CURRENT_TIMESTAMP(6)" })
  timestamp: Date;

  @ManyToOne(() => Note, note => note.status)
  note: Note;
}
