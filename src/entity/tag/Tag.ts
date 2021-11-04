import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, BeforeInsert, getManager } from "typeorm";
import { User } from "../user/User";

@Entity({ name: "tb_tag" })
export class Tag
{

  // # PK
  @PrimaryColumn({ name: "tag_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert()
  {
    const result = await getManager().query("SELECT generate_uid('tb_tag') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # FK
  @Column('varchar', { name: "user_uid", length: 15, nullable: false })
  userUid: string;


  // # Column
  @Column('varchar', { name: "tag_name", length: 50 })
  name: string;

  @Column('bit', { name: "tag_is_delete", default: () => 0 })
  isDelete: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'timestamp', name: "tag_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;

  @CreateDateColumn({ type: 'timestamp', name: "tag_time_delete", default: () => 'CURRENT_TIMESTAMP(6)' })
  timeDelete: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.tag)
  user: User;
}
