import UserDB from "../../../data/UserDatabase";
import * as jwt from 'jsonwebtoken'

export default class FollowUC {
    constructor(
        private database: UserDB
    ) { }

    async execute(token: string, userToFollowId: string) {
        const jwtSecretKey: string = "bananinha"
        const jwtData = jwt.verify(token as string, jwtSecretKey) as { id: string }
        await this.database.follow(
            jwtData.id,
            userToFollowId
        )
    }
}