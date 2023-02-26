import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { StefamonComponent } from './modules/stefamon/stefamon.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { PaginaJogadorComponent } from './pagina-jogador/pagina-jogador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stefamon', component: StefamonComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pagina-jogador', component: PaginaJogadorComponent, canActivate: [AuthGuard]},
  { path: 'pagina-jogador/:id', component: PaginaJogadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
