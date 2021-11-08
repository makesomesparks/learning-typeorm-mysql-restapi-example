import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_password" })
export class UserPassword {

  // PK
  @PrimaryColumn('varchar', { name: "user_password_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert() {
    const result = await getManager().query("SELECT generate_uid('tb_user_password') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // FK
  @Column('varchar', { name: "user_uid", length: 15, nullable: false })
  userUid: string;


  // # Column
  @Column('varchar', { name: "user_password_hash", length: 255 })
  hash: string;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "user_password_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;


  // # Relation n:1
  @ManyToOne(() => User, user => user.password)
  user: User;
}
