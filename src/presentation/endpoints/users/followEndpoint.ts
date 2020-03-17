import { Request, Response } from 'express'
import FollowUC from '../../../business/usecases/users/FollowUC'
import UserDB from '../../../data/UserDatabase'

export default async function followEndpoint(req: Request, res: Response) {
    const useCase = new FollowUC(new UserDB)

    try{
        await useCase.execute(
            req.headers.auth as string,
            req.params.userToFollowId
            )
        res.status(200).send("Seguindo")
    } catch (err){
        res.send(err.message)
    }
}