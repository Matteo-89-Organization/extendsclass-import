export class Persona{
    constructor(nome, cognome){
        this.nome = nome; 
        this.cognome = cognome;
        this._email = '';
        this.indirizzo = '';
    }
    mostraNomeCompleto(){ 
        return this.nome + ' ' + this.cognome;
    }
    //setter ASSEGNA UN VALORE
    set email(value){
        this._email = value;
    }
    //getter LO RECUPERA
    get email(){
        return this._email;
    }
};
