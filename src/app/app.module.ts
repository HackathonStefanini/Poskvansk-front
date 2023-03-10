import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StefamonComponent } from './modules/stefamon/stefamon.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { HomeComponent } from './modules/home/home.component';
import { PaginaJogadorComponent } from './pagina-jogador/pagina-jogador.component';


@NgModule({
  declarations: [
    AppComponent,
    StefamonComponent,
    HomeComponent,
    PaginaJogadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
