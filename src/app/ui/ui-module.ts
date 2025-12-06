import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { MegaMenuModule } from 'primeng/megamenu';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    CommonModule,
    ButtonModule,
    AvatarModule,
    ToolbarModule,
    MegaMenuModule,
    SharedModule
  ],
  exports: [
    ButtonModule, 
    AvatarModule,
    ToolbarModule,
    MegaMenuModule,
    SharedModule,
    CardModule
  ]
})
export class UiModule { }
