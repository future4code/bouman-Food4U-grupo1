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

}