import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncursionesComponent } from './pages/incursiones/incursiones.component';
import { PvpComponent } from './pages/pvp/pvp.component';
import { MvmComponent } from './pages/mvm/mvm.component';
import { FractalesComponent } from './pages/fractales/fractales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PveComponent } from './pages/pve/pve.component';
import { MazmorraComponent } from './pages/mazmorra/mazmorra.component';
import { GeekComponent } from './pages/geek/geek.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    IncursionesComponent,
    PvpComponent,
    MvmComponent,
    FractalesComponent,
    PveComponent,
    MazmorraComponent,
    GeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
