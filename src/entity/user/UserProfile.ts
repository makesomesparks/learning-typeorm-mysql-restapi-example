import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, BeforeInsert, getManager } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_profile" })
export class UserProfile {

    // PK
    @PrimaryColumn({ name: "user_profile_uid", length: 15 })
    uid: string;

    @BeforeInsert()
    private async beforeInsert() {
        const result = await getManager().query("SELECT generate_uid('tb_user_profile') generated_uid");
        this.uid = result[0]["generated_uid"];
    }


    // FK
    @Column('varchar', { name: "user_uid", length: 15, nullable: false })
    userUid: string;


    // # Column
    @Column('varchar', { name: "user_profile_id", length: 30, unique: true })
    id: string;

    @Column('varchar', { name: "user_profile_name", length: 50 })
    name: string;


    // # Timestamp
    @CreateDateColumn({ type: 'timestamp', name: "user_profile_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
    time: string;


    // Relation n:1
    @ManyToOne(() => User, user => user.profile)
    user: User;
}
