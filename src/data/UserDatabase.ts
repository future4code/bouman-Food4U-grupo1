import MainDB from './MainDatabase';
import User from '../business/entities/User';

export default class UserDB extends MainDB {
    async signup(user: User){
        await this.connection.raw(`INSERT into USERS values("${user.getId()}", "${user.getEmail()}", "${user.getPassword()}")`)
    }

    async getUserByEmail(email: string){
        const query = await this.connection.raw(`SELECT id, password from USERS WHERE email = "${email}"`)
        return query[0][0]
    }

    async follow(followerId:string, userToFollowId:string){
        await this.connection.raw(
            `INSERT INTO FOLLOWERS VALUES (
                "${followerId}",
                "${userToFollowId}"
            )`
        )
    }
}