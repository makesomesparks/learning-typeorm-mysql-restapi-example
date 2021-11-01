import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../user/User";
import { UserEmail } from "../user/UserEmail";

@Entity({ name: "tb_verify_email" })
export class VerifyEmail {
  // PK
  @PrimaryColumn("varchar", { name: "verify_email_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_verify_email') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // FK
  @Column('varchar', { name: "user_uid", nullable: false, length: 15 })
  noteUid: string;


  // # Column
  @Column('varchar', { name: "verify_email_address", nullable: false, length: 100 })
  email: string;

  @Column('varchar', { name: "verify_email_token", nullable: false, length: 100, unique: true })
  token: string;

  @Column('varchar', { name: "verify_email_remote_ipv4", default: '', nullable: false, length: 15 })
  remoteIpv4: string;

  @Column('bit', { name: "verify_email_is_verify", default: () => 0 })
  isVerify: boolean;

  @Column('bit', { name: "verify_email_is_expire", default: () => 0 })
  isExpire: boolean;

  @Column('bit', { name: "verify_email_is_send", default: () => 0 })
  isSend: boolean;

  @Column('bit', { name: "verify_email_is_delete", default: () => 0 })
  isDelete: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'timestamp', name: "verify_email_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;

  @CreateDateColumn({ type: 'timestamp', name: "verify_email_time_send", default: () => "CURRENT_TIMESTAMP(6)" })
  timeSend: Date;

  @CreateDateColumn({ type: 'timestamp', name: "verify_email_time_verify", default: () => "CURRENT_TIMESTAMP(6)" })
  timeVerify: Date;

  @CreateDateColumn({ type: 'timestamp', name: "verify_email_time_delete", default: () => "CURRENT_TIMESTAMP(6)" })
  timeDelete: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.verifyEmail)
  user: User;

  @ManyToOne(() => UserEmail, userEmail => userEmail.verifyEmail)
  userEmail: UserEmail;
}
