import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "tb_unique_uid" })
export class UniqueUid {

  // # PK
  @PrimaryColumn('varchar', { name: "unique_uid", length: 15 })
  uid: string;


  // # Column
  @Column('varchar', { name: "target_name", length: 50, default: '' })
  targetName: string;

  @Column('varchar', { name: "remote_addr_ipv4", length: 15 })
  remoteAddrIpv4: string;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime',  name: "unique_uid_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;


  // Etc
  target: any;
}
