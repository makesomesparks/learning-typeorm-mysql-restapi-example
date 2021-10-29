import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_thirdparty_signin" })
export class UserThirdpartySignin {

  @PrimaryColumn('varchar', { name: "user_thirdparty_signin_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_thirdparty_signin') generated_uid");
    this.uid = result[0]["generated_uid"];
  }

  @Column('varchar', { name: "user_uid", length: 15 })
  userUid: string;

  @Column('varchar', { name: "user_thirdparty_signin_type", length: 20 })
  type: string;

  @Column('varchar', { name: "user_thirdparty_signin_token", length: 255 })
  token: string;

  @Column('varchar', { name: "user_thirdparty_signin_key", length: 255 })
  key: string;

  @Column('bit', { name: "user_thirdparty_signin_is_delete" })
  isDelete: boolean;

  @CreateDateColumn({ name: "user_thirdparty_signin_timestamp_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  timestamp: Date;

  @ManyToOne(() => User, user => user.thirdpartySignin)
  user: User;
}
