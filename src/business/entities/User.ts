export default class User {
    constructor(
        private id: string,        
        private email: string,
        private password: string,
        private name: string,
        private birthDate: string
    ){}

    public getId = () => this.id
    public getEmail = () => this.email
    public getPassword = () => this.password
    public getName = () => this.name
    public getBirthDate = () => this.birthDate
}