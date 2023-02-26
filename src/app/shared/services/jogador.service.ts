import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Jogador } from 'src/objects/Jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private readonly API_URL = `${environment.urlBackend}/jogador`;

  constructor(private http: HttpClient) { }

  login(jogador : Jogador) {
    return this.http.post(`${this.API_URL}/login`, jogador);
  }

  cadastrarJogador(jogador : Jogador) {
    return this.http.post(`${this.API_URL}/`, jogador);
  }
}
