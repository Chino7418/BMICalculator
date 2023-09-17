import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  //aca indica luego de path que si esta vacio se diriga al inicio
  { path: '', component: InicioComponent },
  // indicamos que debe ir al componente resultado
  { path: 'resultado/:valor', component: ResultadoComponent },
  //Esto siempre debe ir al ultimo y sirve para que si queremos poner una direccion que no existe nos rediriga al inicio
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
