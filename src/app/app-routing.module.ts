import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitaComponent} from './visita/visita.component';
import {VisitaEditionComponent} from './visita-edition/visita-edition.component';


const routes: Routes = [
  {path: 'visitas', component: VisitaComponent},
  { path: 'edition/:id', component: VisitaEditionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
