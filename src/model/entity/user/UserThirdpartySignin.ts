import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_thirdparty_signin" })
export class UserThirdpartySignin {

  // # PK
  @PrimaryColumn('varchar', { name: "user_thirdparty_signin_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_thirdparty_signin') generated_uid");
    this.uid = result[0]["generated_uid"];
  }

  // # FK
  @Column('varchar', { name: "user_uid", length: 15, nullable: false })
  userUid: string;


  // # Column
  @Column('varchar', { name: "user_thirdparty_signin_type", length: 20 })
  type: string;

  @Column('varchar', { name: "user_thirdparty_signin_token", length: 255 })
  token: string;

  @Column('varchar', { name: "user_thirdparty_signin_key", length: 255 })
  key: string;

  @Column('bit', { name: "user_thirdparty_signin_is_delete", default: () => 0 })
  isDelete: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "user_thirdparty_signin_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;

  @CreateDateColumn({ type: 'datetime', name: "user_thirdparty_signin_time_delete", default: () => 'CURRENT_TIMESTAMP(6)' })
  timeDelete: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.thirdpartySignin)
  user: User;
}
