import { Component } from '@angular/core';
import { UiModule } from '../ui/ui-module';
import { Header } from '../shared/header/header';
import { Carusel } from '../carusel/carusel';



@Component({
  selector: 'app-principal',
  imports: [UiModule,Header],
  standalone: true,
  templateUrl: './principal.html', 
  styleUrl: './principal.css',
})
export class Principal {

DescargarCv(){
  const baseUrl = window.location.origin;
  const pdfUrl = `${baseUrl}/JuanCampo.pdf`;
  
  // Método 1: Abrir en nueva pestaña
  window.open(pdfUrl, '_blank');
  
  // Método 2: Forzar descarga directa (alternativa)
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'JuanCampo.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


}
