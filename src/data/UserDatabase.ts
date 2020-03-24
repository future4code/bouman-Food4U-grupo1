import MainDB from './MainDatabase';
import User from '../business/entities/User';

export default class UserDB extends MainDB {
    async signup(user: User) {
        await this.connection.raw(`INSERT into USERS values(
            "${user.getId()}",             
            "${user.getEmail()}", 
            "${user.getPassword()}",
            "${user.getName()}",
            "${user.getBirthDate()}"
        )`)
    }

    async getUserByEmail(email: string) {
        const query = await this.connection.raw(
            `SELECT id, password, email, name, birth_date 
            FROM USERS WHERE email = "${email}"`
        )
        return query[0][0]
    }

    async follow(followerId: string, userToFollowId: string) {
        await this.connection.raw(
            `INSERT INTO FOLLOWERS VALUES (
                "${followerId}",
                "${userToFollowId}"
            )`
        )
    }

    async changePassword(email: string, newPassword: string) {
        try{
            await this.connection.raw(`
                UPDATE USERS
                SET password = "${newPassword}"
                WHERE email = "${email}"
            `)
        } catch (err){
            throw new Error(err.sqlMessage)
        }
    }
}