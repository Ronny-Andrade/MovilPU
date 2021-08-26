import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuinfoPageRoutingModule } from './menuinfo-routing.module';

import { MenuinfoPage } from './menuinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuinfoPageRoutingModule
  ],
  declarations: [MenuinfoPage]
})
export class MenuinfoPageModule {}
