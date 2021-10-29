import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_email" })
export class UserEmail {

  @PrimaryColumn('varchar', { name: "user_email_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_email') generated_uid");
    this.uid = result[0]["generated_uid"];
  }

  @Column('varchar', { name: "user_uid", length: 15 })
  userUid: string;

  @Column('varchar', { name: "user_email_address", length: 255 })
  address: string;

  @Column('bit', { name: "user_email_is_verify" })
  isVerify: boolean;

  @UpdateDateColumn({ name: "user_email_timestamp_verify", default: () => 'CURRENT_TIMESTAMP(6)' })
  timestampVerify: Date;

  @CreateDateColumn({ name: "user_email_timestamp_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  timestamp: Date;

  @ManyToOne(() => User, user => user.email)
  user: User;
}
