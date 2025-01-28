import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule correctamente

@NgModule({
  declarations: [AppComponent],  // Asegúrate de que solo se declare AppComponent
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,  // Asegúrate de importar AppRoutingModule aquí
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],  // Mantén la propiedad bootstrap con AppComponent
})
export class AppModule {}
