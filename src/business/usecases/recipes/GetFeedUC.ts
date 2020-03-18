import RecipeDB from "../../../data/RecipeDatabase";
import * as jwt  from 'jsonwebtoken'


export default class GetFeedUC {
    constructor(
        private database: RecipeDB
    ){}

    async execute (token:string) {
        const tokenData = jwt.verify(
            token, "bananinha"
        ) as {
            id: string
        }

        const feed = await this.database.getFeed(
            tokenData.id
        )

        return feed


    }
}