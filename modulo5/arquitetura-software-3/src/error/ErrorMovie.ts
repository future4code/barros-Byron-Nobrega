import { CustomError } from "./CustonError";

export class ErrorMovie extends CustomError{
    constructor(){
        super(400,"Verifique parâmetros do body");
    }

}
export class InvalidTitle extends CustomError{
    constructor(){
        super(402,"Titulo do filme inválido!");
    }

}
export class MovieExist extends CustomError{
    constructor(){
        super(400,"Filme já cadastrado!");
    }

}
export class MovieNotFound extends CustomError{
    constructor(){
        super(404,"Fime não encontrado!");
    }

}