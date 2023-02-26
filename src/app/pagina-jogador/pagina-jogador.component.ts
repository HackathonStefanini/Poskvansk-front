import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Jogador } from 'src/objects/Jogador';
import { JogadorService } from 'src/app/shared/services/jogador.service';

@Component({
  selector: 'app-pagina-jogador',
  templateUrl: './pagina-jogador.component.html',
  styleUrls: ['./pagina-jogador.component.css']
})
export class PaginaJogadorComponent implements OnInit {

  jogador : Jogador;

  constructor(
    private jogadorService : JogadorService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    let id : number = this.route.snapshot.params['id'];

    // HARDCODED POR ENQUANTO
    this.jogadorService.pegaPorId(id).subscribe(
      (jogador) => {
        this.jogador = jogador;
        console.log(this.jogador)
      });

  }

}
