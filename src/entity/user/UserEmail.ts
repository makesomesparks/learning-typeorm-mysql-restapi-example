import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { VerifyEmail } from "../verify/VerifyEmail";
import { User } from "./User";

@Entity({ name: "tb_user_email" })
export class UserEmail {

  // # PK
  @PrimaryColumn('varchar', { name: "user_email_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_email') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # FK
  @Column('varchar', { name: "user_uid", length: 15, nullable: false })
  userUid: string;

  @Column('varchar', { name: "verify_email_uid", length: 15, nullable: false })
  verifyEmailUid: string;


  // # Timestamp
  @CreateDateColumn({ type: 'timestamp', name: "user_email_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.email)
  user: User;


  // # Relation 1:1
  @OneToOne(() => VerifyEmail, verifyEmail => verifyEmail.user)
  verifyEmail: VerifyEmail;
}
