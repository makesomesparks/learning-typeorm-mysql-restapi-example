import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "src/model/entity/user/User";
import { UserEmail } from "src/model/entity/user/UserEmail";

@Entity({ name: "tb_email_verify" })
export class EmailVerify
{
  // PK
  @PrimaryColumn("varchar", { name: "email_verify_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert()
  {
    const result = await getManager().query("SELECT generate_uid('tb_email_verify') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // FK
  @Column('varchar', { name: "user_uid", nullable: false, length: 15 })
  noteUid: string;


  // # Column
  @Column('varchar', { name: "email_verify_address", nullable: false, length: 100 })
  email: string;

  @Column('varchar', { name: "email_verify_token", nullable: false, length: 100, unique: true })
  token: string;

  @Column('varchar', { name: "email_verify_remote_ipv4", default: '', nullable: false, length: 15 })
  remoteIpv4: string;

  @Column('bit', { name: "email_verify_is_verify" })
  isVerify: boolean;

  @Column('bit', { name: "email_verify_is_expire" })
  isExpire: boolean;

  @Column('bit', { name: "email_verify_is_send" })
  isSend: boolean;

  @Column('bit', { name: "email_verify_is_delete" })
  isDelete: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "email_verify_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;

  @CreateDateColumn({ type: 'datetime', name: "email_verify_time_send", default: () => "CURRENT_TIMESTAMP(6)" })
  timeSend: Date;

  @CreateDateColumn({ type: 'datetime', name: "email_verify_time_verify", default: () => "CURRENT_TIMESTAMP(6)" })
  timeVerify: Date;

  @CreateDateColumn({ type: 'datetime', name: "email_verify_time_delete", default: () => "CURRENT_TIMESTAMP(6)" })
  timeDelete: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.verifyEmail)
  user: User;

  @OneToMany(() => UserEmail, userEmail => userEmail.emailVerify)
  userEmail: UserEmail;
}
