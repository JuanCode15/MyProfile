import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './carusel.html',
  styleUrls: ['./carusel.css'],
})
export class Carusel {
  images: any[] = [
    {
      itemImageSrc: 'assets/img/hola.png',
      thumbnailImageSrc: 'assets/img/aws.png',
      alt: 'Descripción 1',
      title: 'Título 1'
    },
    {
      itemImageSrc: 'assets/img/aws.png',
      thumbnailImageSrc: 'assets/img/aws.png',
      alt: 'Descripción 2',
      title: 'Título 2'
    },
    // ... más imágenes 
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


}
