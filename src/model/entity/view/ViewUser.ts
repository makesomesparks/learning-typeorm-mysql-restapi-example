import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "view_user", synchronize: false })
export class ViewUser
{
  @PrimaryColumn('varchar', { name: "user_uid", length: 15 })
  user_uid: string;

  @Column('varchar', { name: "user_password_uid", length: 15 })
  user_password_uid: string;

  @Column('varchar', { name: "user_profile_uid", length: 15 })
  user_profile_uid: string;

  @Column('varchar', { name: "email_verify_uid", length: 15 })
  email_verify_uid: string;

  @Column('varchar', { name: "user_email_uid", length: 15 })
  user_email_uid: string;

  @Column('varchar', { name: "id", length: 30 })
  id: string;

  @Column('varchar', { name: "name", length: 50 })
  name: string;

  @Column('varchar', { name: "email", length: 100 })
  email: string;

  @Column('varchar', { name: "password", length: 255 })
  password: string;

  @Column('bit', { name: "is_email_verify" })
  isEmailVerify: boolean;

  @Column('bit', { name: "is_email_expire" })
  isEmailExpire: boolean;

  @Column('bit', { name: "is_email_send" })
  isEmailSend: boolean;

  @Column('bit', { name: "is_email_delete" })
  isEmailDelete: boolean;

  @CreateDateColumn({ type: 'datetime', name: "time" })
  time: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_password" })
  timePassword: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_profile" })
  timeProfile: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_email" })
  timeEmail: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_email_verify" })
  timeEmailVerify: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_email_send" })
  timeEmailSend: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_email_verified" })
  timeEmailVerified: Date;

  @CreateDateColumn({ type: 'datetime', name: "time_email_delete" })
  timeEmailDelete: Date;

}