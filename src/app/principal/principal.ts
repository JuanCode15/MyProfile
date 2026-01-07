import { Component } from '@angular/core';
import { UiModule } from '../ui/ui-module';
import { Header } from '../shared/header/header';
import { Carusel } from '../carusel/carusel';



@Component({
  selector: 'app-principal',
  imports: [UiModule,Header,Carusel],
  standalone: true,
  templateUrl: './principal.html', 
  styleUrl: './principal.css',
})
export class Principal {

DescargarCv(){
  window.open('/JuanCampo.pdf', '_blank')
}


}
