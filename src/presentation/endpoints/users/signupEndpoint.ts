import { Request, Response } from 'express'
import SignupUC from '../../../business/usecases/users/SignupUC'
import UserDB from '../../../data/UserDatabase'

export default async function signupEndpoint(req: Request, res: Response) {
    const useCase = new SignupUC(new UserDB())
    try {
        const result = await useCase.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send(result)
    } catch (err) {
        res.send(err.message)
    }

}