import { Component } from '@angular/core';
import { UiModule } from '../ui/ui-module';
import { Header } from '../shared/header/header';



@Component({
  selector: 'app-principal',
  imports: [UiModule,Header],
  standalone: true,
  templateUrl: './principal.html', 
  styleUrl: './principal.css',
})
export class Principal {

}
