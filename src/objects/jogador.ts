import { Stefamon } from './Stefamon';

export class Jogador {

    public id?: number = 0;
    public nickname?: string = "";
    public password?: string = "";
    public saldo?: number = 0;
    public listaStefamons?: Stefamon[] = [];

    // constructor(nickname: string, password: string, saldo: number, listaStefamons: Stefamon[]) {
    //     this.nickname = nickname;
    //     this.password = password;
    //     this.saldo = saldo;
    //     this.listaStefamons = listaStefamons;
    // }
}