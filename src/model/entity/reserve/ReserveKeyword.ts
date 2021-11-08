import { BeforeInsert, Column, CreateDateColumn, Entity, getManager, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "tb_reserve_keyword" })
export class ReserveKeyword
{

  // # PK
  @PrimaryColumn({ name: "reserve_keyword_uid", length: 15 })
  uid: string;

  @BeforeInsert()
  private async beforeInsert()
  {
    const result = await getManager().query("SELECT generate_uid('tb_reserve_keyword') generated_uid");
    this.uid = result[0]["generated_uid"];
  }


  // # Column
  @Column('varchar', { name: "reserve_keyword_type", length: 20 })
  type: string;

  @Column('varchar', { name: "reserve_keyword_value", length: 50 })
  value: string;

  @Column('bit', { name: "reserve_keyword_is_disable", default: () => 0 })
  isDisable: boolean;


  // # Timestamp
  @CreateDateColumn({ type: 'datetime', name: "reserve_keyword_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
  time: Date;
}
