import UserDB from "../../../data/UserDatabase";
import User from "../../entities/User";

interface SignupInput {
    email: string
    password: string
}

export default class SignupUC {
    constructor(
        private database: UserDB
    ) { }

    async execute(input: SignupInput) {
        await this.database.signup(new User)
    }
}