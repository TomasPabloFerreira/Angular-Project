import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      { path: "address/edit/:id", component: AdressComponent },
      { path: "drag", component: DragComponent },
      { path: "tree", component: TreeComponent },
      { path: "home", component: DashComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
