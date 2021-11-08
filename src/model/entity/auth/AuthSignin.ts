import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "src/model/entity/user/User";
import { UserEmail } from "src/model/entity/user/UserEmail";

@Entity({ name: "tb_auth_signin" })
export class AuthSignin
{
  // PK
  @PrimaryColumn("varchar", { name: "auth_signin_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert()
  {
    const result = await getManager().query("SELECT generate_uid('tb_auth_signin') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // FK
  @Column('varchar', { name: "user_uid", nullable: false, length: 15 })
  noteUid: string;


  // # Column
  @Column('varchar', { name: "auth_signin_token", length: 64 })
  token: string;

  @Column('varchar', { name: "auth_signin_try_email", length: 100 })
  email: string;

  @Column('varchar', { name: "auth_signin_remote_ipv4", length: 15 })
  remoteIpv4: string;

  // @see https://about.ip2c.org/#examplejava
  // @example GET http://ip2c.org/:ip
  @Column('varchar', { name: "auth_signin_remote_ipv4_counrty", length: 3 })
  remoteCounrty: string;

  @Column('varchar', { name: "auth_signin_referer", length: 250 })
  referer: string;

  // @see https://wicg.github.io/ua-client-hints/
  @Column('varchar', { name: "auth_signin_platform", length: 250 })
  platform: string;

  @Column('varchar', { name: "auth_signin_mobile", length: 250 })
  isMobile: string;

  @Column('varchar', { name: "auth_signin_ua", length: 250 })
  ua: string;

  @Column('varchar', { name: "auth_signin_user_agent", length: 250 })
  userAgent: string;

  @Column('varchar', { name: "auth_signin_query", length: 250 })
  query: string;

  @Column('bit', { name: "auth_signin_is_success" })
  isSuccess: boolean;

  @Column('bit', { name: "auth_signin_is_maintain" })
  isMaintain: boolean;

  @Column('bit', { name: "email_verify_is_expire" })
  isExpire: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "auth_signin_time_create", default: () => "CURRENT_TIMESTAMP(6)" })
  time: Date;

  @CreateDateColumn({ type: 'datetime', name: "auth_signin_time_expire", default: () => "CURRENT_TIMESTAMP(6)" })
  timeExpire: Date;

  @CreateDateColumn({ type: 'datetime', name: "auth_signin_time_maintain", default: () => "CURRENT_TIMESTAMP(6)" })
  timeMaintain: Date;

  // # Relation n:1
  @ManyToOne(() => User, user => user.verifyEmail)
  user: User;

}
