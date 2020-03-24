import { Request, Response } from 'express'
import CreateRecipeUC from '../../../business/usecases/recipes/CreateRecipeUC'
import RecipeDB from '../../../data/RecipeDatabase'

export default async function createRecipeEndpoint(req: Request, res: Response) {
    const useCase = new CreateRecipeUC(new RecipeDB())
    
    try {
        await useCase.execute({
            token: req.headers.auth as string,
            title: req.body.title,
            description: req.body.description           
        })
        res.status(200).send("Receita criada com sucesso")
    } catch (err) {
        res.status(500).send(err.message)
    }

}