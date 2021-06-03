import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* import { AppComponent } from './app.component'; */
import { HomeComponent } from './components/home/home.component';
import { BolosComponent } from './categorias/content/bolos/bolos.component';
import { MassasComponent } from './categorias/content/massas/massas.component';
import { SobremesasComponent } from './categorias/content/sobremesas/sobremesas.component';

import { PudimComponent } from './receitas/content/pudim/pudim.component';
import { PanquecaComponent } from './receitas/content/panqueca/panqueca.component';
import { BolochocolateComponent } from './receitas/content/bolochocolate/bolochocolate.component';
import { LasanhaComponent } from './receitas/content/lasanha/lasanha.component';

const routes: Routes = [
 /* component: AppComponent */
  { path: "", component: HomeComponent },  
  { path: "bolos", component: BolosComponent },
  { path: "massas", component: MassasComponent },
  { path: "sobremesas", component: SobremesasComponent },

  { path: "pudim", component: PudimComponent },
  { path: "panqueca", component: PanquecaComponent },  
  { path: "bolochocolate", component: BolochocolateComponent },
  { path: "lasanha", component: LasanhaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
