import { CustomError } from "./CustonError";

export class ErrorUser extends CustomError{
    constructor(){
        super(400,"Verifique parâmetros do body");
    }

}
export class InvalidEmail extends CustomError{
    constructor(){
        super(402,"Email inválido!");
    }

}
export class EmailExist extends CustomError{
    constructor(){
        super(400,"Email já cadastrado!");
    }

}
export class UserNotFound extends CustomError{
    constructor(){
        super(404,"Usuária não encontrado!");
    }

}