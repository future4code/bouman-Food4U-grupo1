export default class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: string,
        private authorId: string
    ) { }

    getId = (): string => this.id
    getTitle = (): string => this.title
    getDescription = (): string => this.description
    getCreationDate = (): string => this.creationDate
    getAuthorId = (): string => this.authorId
}