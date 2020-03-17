import RecipeDB from "../../../data/RecipeDatabase";
import * as jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
import Recipe from "../../entities/Recipe";
import * as moment from "moment"

export default class CreateRecipeUC {
    constructor(
        private database: RecipeDB
    ) { }

    mapDateToDBDate = (date: Date) => {
        return String(
            date.getFullYear() + '-' +
            Number(date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds()
        )
    }


    async execute(input: InputInterface) {
        const jwtSecretKey: string = "bananinha"
        const jwtData = jwt.verify(input.token, jwtSecretKey) as {
            id: string,
            email: string
        }
        const id = v4()
        const creationTime = this.mapDateToDBDate(new Date())

        await this.database.createRecipe(new Recipe(
            id,
            input.title,
            input.description,
            creationTime,
            jwtData.id
        ))

    }
}

interface InputInterface {
    token: string
    title: string
    description: string
}