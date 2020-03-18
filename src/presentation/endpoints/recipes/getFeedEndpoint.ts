import { Request, Response } from 'express'
import RecipeDB from '../../../data/RecipeDatabase'
import GetFeedUC from '../../../business/usecases/recipes/GetFeedUC'

export default async function getFeedEndpoint(
    req: Request, res: Response
) {

    const useCase = new GetFeedUC(new RecipeDB())
    try {
        const result = await useCase.execute(
            req.headers.auth as string
        )

        res.status(200).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }

}