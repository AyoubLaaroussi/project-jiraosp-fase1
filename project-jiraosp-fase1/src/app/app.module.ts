import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // Componentes declarados en este módulo
    
  ],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  providers: [
    // Servicios proporcionados por este módulo
    AppService
  ]
})
export class AppModule { }