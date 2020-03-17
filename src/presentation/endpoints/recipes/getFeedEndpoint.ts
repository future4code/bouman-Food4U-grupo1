import { Request, Response } from 'express'

export default async function createRecipeEndpoint(req: Request, res: Response) {
    
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }

}