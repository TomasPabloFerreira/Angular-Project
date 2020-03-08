import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PrimariosComponent } from './primarios/primarios.component';
import { RojoComponent } from './rojo/rojo.component';
import { RojoClaroComponent } from './rojo-claro/rojo-claro.component';
import { RojoOscuroComponent } from './rojo-oscuro/rojo-oscuro.component';
import { SecundariosComponent } from './secundarios/secundarios.component';
import { AzulComponent } from './azul/azul.component';
import { AmarilloComponent } from './amarillo/amarillo.component';
import { VerdeComponent } from './verde/verde.component';
import { VioletaComponent } from './violeta/violeta.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DragComponent } from './drag/drag.component';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { TablaComponent } from './tabla/tabla.component';
import { AdressComponent } from './adress/adress.component';


const routes: Routes = [

  {
    path: "", component: NavegacionComponent,
    children: [
      { path: "adress", component: AdressComponent },
      { path: "table", component: TablaComponent },
      { path: "table/edit/:id", component: AdressComponent },
      { path: "drag", component: DragComponent },
      { path: "tree", component: TreeComponent },
      { path: "home", component: DashComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
