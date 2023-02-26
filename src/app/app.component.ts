import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private jogadorService: JogadorService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.items = [
      {label: 'Stefamon', disabled: true},
    ];
  }

  // login(jogador : Jogador) {
  login() {
    this.jogadorService.login(this.jogador).subscribe(
      (jogador : any) => {
        alert('Login realizado com sucesso!');
        this.router.navigate(['/pagina-jogador', jogador.id]);
      },
      (error) => {
        alert('Erro ao realizar login! Usuário não encontrado!');
      });
  }
}
