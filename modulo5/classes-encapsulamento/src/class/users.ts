export class Users{
    private id: string
    private email: string
    private password: string

    constructor(id: string, email: string, password: string){
        this.id = id
        this.email = email
        this.password = password
    }

    public getId(): string{
        return this.id
    }
    public getEmail(): string{
        return this.email
    }
    public getPassword(): string{
        return this.password
    }
    public setPassword(password: string){
        this.password = password
    }
    public setEmail(email: string){
        this.email = email
    }
    public setId(id: string){
        this. id = id
    }

}