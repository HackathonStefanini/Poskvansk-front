import { Component, OnInit } from '@angular/core';

import { Jogador } from 'src/objects/Jogador';
import { JogadorService } from 'src/app/shared/services/jogador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JogadorService]
})
export class HomeComponent implements OnInit {

  jogador : Jogador = new Jogador();

  constructor(private jogadorService : JogadorService) { }

  ngOnInit(): void {
  }

  cadastrarJogador() {
    alert("Cadastrando jogador " + this.jogador.nickname + " com senha " + this.jogador.password);
    this.jogadorService.cadastrarJogador(this.jogador).subscribe(
      (response) => {
        console.log(response);
      });
  }
}
