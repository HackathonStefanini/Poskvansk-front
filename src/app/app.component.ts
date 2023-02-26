import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { Jogador } from 'src/objects/Jogador';
import { JogadorService } from './shared/services/jogador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hackathon-angular';
  items: MenuItem[];

  jogador: Jogador = new Jogador();

  constructor(
    private jogadorService: JogadorService
  ) { }

  ngOnInit(): void {

    this.items = [
      {label: 'Stefamon', disabled: true},
    ];
  }

  // login(jogador : Jogador) {
  login() {
    this.jogadorService.login(this.jogador).subscribe(
      (response) => {
        console.log(response);
      });
  }
}
