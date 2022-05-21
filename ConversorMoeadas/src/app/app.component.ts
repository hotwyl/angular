import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversorService } from './conversor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConversorMoeadas';

  formulario: any;
  valorConvertido: number = 0;
  visibilidadeValorConvertido : boolean = false;
  moedas: any;

  constructor(private conversorService: ConversorService){ }

  ngOnInit(): void{
    this.valorConvertido = 0;
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }

  Converter(): void{
    const valor = this.formulario.value.valor != null ? this.formulario.value.valor : 1;
    this.visibilidadeValorConvertido = true;
    this.conversorService.RealizarConversao().subscribe(resultado =>{
      this.valorConvertido = Number((valor * resultado.rates.BRL).toFixed(2));
      this.moedas = resultado.rates;
      // console.log();
    })
  }
}
