import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav'; //API sidenav
import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BolosComponent } from './categorias/content/bolos/bolos.component';
import { MassasComponent } from './categorias/content/massas/massas.component';
import { MaispedidasComponent } from './categorias/content/maispedidas/maispedidas.component';
import { SobremesasComponent } from './categorias/content/sobremesas/sobremesas.component';
import { PudimComponent } from './receitas/content/pudim/pudim.component';
import { PanquecaComponent } from './receitas/content/panqueca/panqueca.component';
import { BolochocolateComponent } from './receitas/content/bolochocolate/bolochocolate.component';
import { CompfilhoComponent } from './receitas/content/bolochocolate/compfilho/compfilho.component';
import { LasanhaComponent } from './receitas/content/lasanha/lasanha.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    BolosComponent,
    MassasComponent,
    MaispedidasComponent,
    SobremesasComponent,
    PudimComponent,
    PanquecaComponent,
    BolochocolateComponent,
    CompfilhoComponent,
    LasanhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
