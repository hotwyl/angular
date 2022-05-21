import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  RealizarConversao(): Observable<any>{
    const apikey = "RAKgU93dSBf2LtteXIh397Xg1nhmYYc7onYv";
    const url =`https://currencyapi.net/api/v1/rates?key=${apikey}&base=USD`;

    return this.http.get<any>(url);
  }
}
