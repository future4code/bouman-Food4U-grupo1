import { Request, Response } from 'express'
import SignupUC from '../../../business/usecases/users/SignupUC'
import UserDB from '../../../data/UserDatabase'

export default async function signupEndpoint(req: Request, res: Response) {
    const useCase = new SignupUC(new UserDB())
    try {
        await useCase.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthDate: req.body.birthDate
        })

        res.send("Usuário criado")
    } catch (err) {
        res.send(err.message)
    }

}