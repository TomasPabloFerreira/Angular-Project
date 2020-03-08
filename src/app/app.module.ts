import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PrimariosComponent } from './primarios/primarios.component';
import { RojoComponent } from './rojo/rojo.component';
import { AzulComponent } from './azul/azul.component';
import { AmarilloComponent } from './amarillo/amarillo.component';
import { RojoClaroComponent } from './rojo-claro/rojo-claro.component';
import { RojoOscuroComponent } from './rojo-oscuro/rojo-oscuro.component';
import { SecundariosComponent } from './secundarios/secundarios.component';
import { VioletaComponent } from './violeta/violeta.component';
import { VerdeComponent } from './verde/verde.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EmailComponent } from './email/email.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdressComponent } from './adress/adress.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    EjemploComponent,
    PrimariosComponent,
    RojoComponent,
    AzulComponent,
    AmarilloComponent,
    RojoClaroComponent,
    RojoOscuroComponent,
    SecundariosComponent,
    VioletaComponent,
    VerdeComponent,
    NavegacionComponent,
    EmailComponent,
    TablaComponent,
    TreeComponent,
    DashComponent,
    DragComponent,
    AdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
