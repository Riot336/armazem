import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClianteInserirComponent } from './cliante-inserir/cliante-inserir.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ClianteInserirComponent,
    CabecalhoComponent,
    ClienteListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
