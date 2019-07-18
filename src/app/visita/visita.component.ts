import { Component, OnInit } from '@angular/core';
import {VisitaService} from '../visita.service';
import {Visita} from '../visita';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent implements OnInit {

  constructor(private visitaService: VisitaService) { }

  visitas: Visita[];

  ngOnInit() {
    this.getVisitas();
  }

  getVisitas() {
    this.visitaService.getVisitas().subscribe(visitas => this.visitas = visitas);
  }

  delete(id: number) {
    this.visitaService.delete(id).subscribe(() => this.getVisitas() );
  }
}
