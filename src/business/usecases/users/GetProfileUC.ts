import UserDB from "../../../data/UserDatabase";
import * as jwt from 'jsonwebtoken';

export default class GetProfileUC {
    constructor(
        private database: UserDB
    ) { }

    async execute(token: any) {
        const jwtSecretKey: string = "bananinha"
        const jwtData = jwt.verify(token as string, jwtSecretKey) 
        return jwtData
    }    
}