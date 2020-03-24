import UserDB from "../../../data/UserDatabase";
import User from "../../entities/User";
import { v4 } from "uuid";
import * as bcrypt from 'bcrypt';

interface SignupInput {
    name: string
    email: string
    password: string
    birthDate: string
}

export default class SignupUC {
    constructor(
        private database: UserDB
    ) { }

    async execute(input: SignupInput) {
        
        const id = v4()
        const rounds = 10
        const hashPassword = await bcrypt.hash(input.password, rounds)

        await this.database.signup(new User(
            id,            
            input.email,
            hashPassword,
            input.name,
            input.birthDate
        ))
    }
}