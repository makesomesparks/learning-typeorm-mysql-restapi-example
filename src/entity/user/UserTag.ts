import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, BeforeInsert, getManager } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_tag" })
export class UserTag {

  // # PK
  @PrimaryColumn({ name: "user_tag_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_tag') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # FK
  @Column('varchar', { name: "user_uid", length: 15, nullable: false })
  userUid: string;


  // # Column
  @Column('varchar', { name: "user_tag_name", length: 50 })
  name: string;

  @Column('bit', { name: "user_tag_is_delete", default: () => 0 })
  isDelete: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'timestamp', name: "user_tag_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: string;


  // # Relation n:1
  @ManyToOne(() => User, user => user.tag)
  user: User;
}
