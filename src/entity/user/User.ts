import { BeforeInsert, CreateDateColumn, Entity, getManager, OneToMany, PrimaryColumn } from "typeorm";
import { Note } from "../note/Note";
import { VerifyEmail } from "../verify/VerifyEmail";
import { UserEmail } from "./UserEmail";
import { UserPassword } from "./UserPassword";
import { UserProfile } from "./UserProfile";
import { UserTag } from "./UserTag";
import { UserThirdpartySignin } from "./UserThirdpartySignin";

@Entity({ name: "tb_user" })
export class User {

    // # PK
    @PrimaryColumn('varchar', { name: "user_uid", length: 15 })
    uid: string;

    @BeforeInsert()
    private async beforeInsert() {
        const result = await getManager().query("SELECT generate_uid('tb_user') generated_uid");
        this.uid = result[0]["generated_uid"];
    }


    // # Timestamp
    @CreateDateColumn({ type: 'timestamp',  name: "user_time_create", default: () => 'CURRENT_TIMESTAMP(6)' })
    time: Date;


    // # Relation 1:n
    @OneToMany(() => UserProfile, profile => profile.user)
    profile: UserProfile[];

    @OneToMany(() => UserPassword, password => password.user)
    password: UserPassword[];

    @OneToMany(() => UserEmail, email => email.user)
    email: UserEmail[];

    @OneToMany(() => UserThirdpartySignin, thirdpartySignin => thirdpartySignin.user)
    thirdpartySignin: UserThirdpartySignin[];

    @OneToMany(() => VerifyEmail, verifyEmail => verifyEmail.user)
    verifyEmail: VerifyEmail[];

    @OneToMany(() => UserTag, tag => tag.user)
    tag: UserTag[];

    @OneToMany(() => Note, note => note.user)
    note: Note[];
}
