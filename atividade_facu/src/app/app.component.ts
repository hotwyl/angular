import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'atividade_facu';

  cabecalho = ['Nome', 'RU', 'Curso', 'Data Nascimento'];

  contatos = [
    new Contato('William Camargo', 3283795, 'BACHARELADO EM ENGENHARIA DE SOFTWARE', '16/03/1990'),
    new Contato('Gael Yuri Eduardo Mendes', 277748, 'Matemática', '22/04/2020'),
    new Contato('Malu Louise das Neves', 277750, 'Ciência de Dados', '13/03/1981'),
    new Contato('Pedro Henrique Anderson Victor Martins', 277668, 'Análise e Desenvolvimento de Sistema', '10/03/1987'),
    new Contato('Emilly Rosângela Sophia Fogaça', 347750, 'Marketing', '30/09/1993'),
  ];

}
