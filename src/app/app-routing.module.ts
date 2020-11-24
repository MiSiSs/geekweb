import { GeekComponent } from './pages/geek/geek.component';
import { MazmorraComponent } from './pages/mazmorra/mazmorra.component';
import { PveComponent } from './pages/pve/pve.component';
import { PvpComponent } from './pages/pvp/pvp.component';
import { MvmComponent } from './pages/mvm/mvm.component';
import { IncursionesComponent } from './pages/incursiones/incursiones.component';
import { FractalesComponent } from './pages/fractales/fractales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fractales', component: FractalesComponent},{
    path: 'incursiones', component: IncursionesComponent},{
    path: 'mvm', component: MvmComponent},{
    path: 'pvp', component: PvpComponent},{
    path: "pve", component: PveComponent},{
    path: "mazmorra", component: MazmorraComponent},{
    path: "geek", component: GeekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
