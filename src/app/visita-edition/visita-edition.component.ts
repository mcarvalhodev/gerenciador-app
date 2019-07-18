import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VisitaService} from '../visita.service';
import {Visita} from '../visita';

@Component({
  selector: 'app-visita-edition',
  templateUrl: './visita-edition.component.html',
  styleUrls: ['./visita-edition.component.css']
})
export class VisitaEditionComponent implements OnInit {

  visita: Visita;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private visitaService: VisitaService) {
  }

  ngOnInit() {
    this.getVisita();
  }

  getVisita(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.visita = {};
      return;
    }
    this.visitaService.getVisita(id)
      .subscribe(v => {
        this.visita = v;
      });
  }

  salvar() {
    this.visita.dataVisita = new Date(this.visita.dataVisita.year, this.visita.dataVisita.month, this.visita.dataVisita.day);
    this.visitaService.salvar(this.visita)
      .subscribe(data => {
        this.router.navigate(['visitas']);
      });
  }
}
