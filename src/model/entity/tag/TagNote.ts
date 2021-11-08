import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, BeforeInsert, getManager } from "typeorm";
import { Note } from "src/model/entity/note/Note";
import { Tag } from "./Tag";

@Entity({ name: "tb_tag_note" })
export class TagNote
{

  // # PK
  @PrimaryColumn({ name: "tag_note_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert()
  {
    const result = await getManager().query("SELECT generate_uid('tb_tag_note') generated_uid");
    this.uid = result[0]["generated_uid"];
  }

  // # FK
  @Column('varchar', { name: "tag_uid", length: 15, nullable: false })
  tagUid: string;

  @Column('varchar', { name: "note_uid", length: 15, nullable: false })
  noteUid: string;


  // # Column
  @Column('bit', { name: "tag_note_is_delete", default: () => 0 })
  isDelete: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "tag_note_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;

  @CreateDateColumn({ type: 'datetime', name: "tag_note_time_delete", default: () => 'CURRENT_TIMESTAMP(6)' })
  timeDelete: Date;


  // # Relation n:1
  @ManyToOne(() => Tag, tag => tag.tagNote)
  tag: Tag;

  @ManyToOne(() => Note, note => note.tagNote)
  note: Note;
}
