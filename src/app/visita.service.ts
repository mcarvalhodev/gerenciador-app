import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Visita} from './visita';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http: HttpClient) { }

  private visitaUrl = 'http://localhost:8080/visitas';

  getVisitas(): Observable<Visita[]> {
    return this.http.get<Visita[]>(this.visitaUrl);
  }

  delete(id: number) {
    return this.http.delete(this.visitaUrl + '/' + id);
  }

  getVisita(id: number): Observable<Visita> {
    return this.http.get<Visita>(this.visitaUrl + '/' + id);
  }

  salvar(visita: Visita) {
    return this.http.post(this.visitaUrl, visita);
  }
}
