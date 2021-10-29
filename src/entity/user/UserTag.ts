import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, BeforeInsert, getManager } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_tag" })
export class UserTag {

  @PrimaryColumn({ name: "user_tag_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_tag') generated_uid");
    this.uid = result[0]["generated_uid"];
  }

  @Column('varchar', { name: "user_uid", length: 15, nullable: false })
  userUid: string;

  @Column('varchar', { name: "user_tag_name", length: 50 })
  name: string;

  @Column('bit', { name: "user_tag_is_delete" })
  isDelete: boolean;

  @CreateDateColumn({ name: "user_tag_timestamp_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  timestamp: string;

  @ManyToOne(() => User, user => user.tag)
  user: User;
}
