import MainDB from "./MainDatabase";
import Recipe from "../business/entities/Recipe";

export default class RecipeDB extends MainDB {

    async createRecipe (recipe:Recipe) {
        await this.connection.raw(
            `INSERT INTO RECIPES VALUES (
                "${recipe.getId()}",
                "${recipe.getTitle()}",
                "${recipe.getDescription()}",
                "${recipe.getCreationDate()}",
                "${recipe.getAuthorId()}"
            )`
        )
    }

    async getFeed(id:string){
        const query = await this.connection.raw(
            `SELECT email, title, description, creation_date FROM FOLLOWERS 
            JOIN RECIPES ON user_id = author_id
            JOIN USERS ON author_id = USERS.id
            WHERE follower_id = "${id}"
            ORDER BY creation_date;
            
            `
        )

        return query[0]
    }

}