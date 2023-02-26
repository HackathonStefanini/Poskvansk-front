export class Stefamon {

    private id: number;
    private nome: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    private inteligencia: number;
    private poder: number;
    private velocidade: number;
    private urlFoto: string;

    constructor(id: number, nome: string, vida: number, ataque: number, defesa: number, inteligencia: number, poder: number, velocidade: number, urlFoto: string) {
        this.id = id;
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.inteligencia = inteligencia;
        this.poder = poder;
        this.velocidade = velocidade;
        this.urlFoto = urlFoto;
    }
}