import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliante-inserir',
  templateUrl: './cliante-inserir.component.html',
  styleUrls: ['./cliante-inserir.component.css']
})
export class ClianteInserirComponent implements OnInit {

  nome: string |undefined;
  fone: string  |undefined;
  email: string |undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onAdicionarCliente() {
    console.log('inserindo cliente...');
    }
  }
