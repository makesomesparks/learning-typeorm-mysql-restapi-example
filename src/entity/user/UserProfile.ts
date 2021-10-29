import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, BeforeInsert, getManager } from "typeorm";
import { User } from "./User";

@Entity({ name: "tb_user_profile" })
export class UserProfile {

    @PrimaryColumn({ name: "user_profile_uid", length: 15 })
    uid: string;

    @BeforeInsert()
    private async beforeInsert() {
        const result = await getManager().query("SELECT generate_uid('tb_user_profile') generated_uid");
        this.uid = result[0]["generated_uid"];
    }

    @Column('varchar', { name: "user_uid", length: 15 })
    userUid: string;

    @Column('varchar', { name: "user_profile_id", length: 30 })
    id: string;

    @Column('varchar', { name: "user_profile_name", length: 50 })
    name: string;

    @CreateDateColumn({ name: "user_profile_timestamp_create", default: () => 'CURRENT_TIMESTAMP(6)' })
    timestamp: string;

    @ManyToOne(() => User, user => user.profile)
    user: User;
}
