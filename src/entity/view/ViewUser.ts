import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "view_user", synchronize: false })
export class EmailVerify
{
  @Column('varchar', { name: "user_uid", length: 15 })
  user_uid: string;

  @Column('varchar', { name: "user_password_uid", length: 15 })
  user_password_uid: string;

  @Column('varchar', { name: "user_profile_uid", length: 15 })
  user_profile_uid: string;

  @Column('varchar', { name: "email_verify_uid", length: 15 })
  email_verify_uid: string;

  @Column('varchar', { name: "user_email_uid", length: 15 })
  user_email_uid: string;

  @Column('varchar', { name: "user_email_uid", length: 30 })
  id: string;

  @Column('varchar', { name: "user_email_uid", length: 50 })
  name: string;

  @Column('varchar', { name: "user_email_uid", length: 100 })
  email: string;

  @Column('varchar', { name: "user_email_uid", length: 255 })
  password: string;

  is_email_verify: boolean;
  is_email_expire: boolean;
  is_email_send: boolean;
  is_email_delete: boolean;

  time: Date;
  time_password: Date;
  time_profile: Date;
  time_email: Date;
  time_email_verify: Date;
  time_email_send: Date;
  time_email_verified: Date;
  time_email_delete: Date;

}