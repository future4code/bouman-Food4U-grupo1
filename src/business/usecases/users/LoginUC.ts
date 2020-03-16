import UserDB from "../../../data/UserDatabase";
import User from "../../entities/User";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

interface LoginInput {
    email: string
    password: string
}

export default class LoginUC {
    constructor(
        private database: UserDB
    ) { }

    async execute(input: LoginInput) {
        const dbpassword = await this.database.getUserByEmail(input.email) 
        const isPasswordCorrect = await bcrypt.compare(input.password, dbpassword.password)
        const jwtSecretKey: string = "bananinha"
        if(isPasswordCorrect){
            const token = jwt.sign({email: input.email}, jwtSecretKey, {expiresIn: "1h"})
            return {
                message: "Usuário logado.",
                token
            }
        } else {
            throw new Error("Usuário não encontrado ou senha incorreta.")
            
        }
    }
}