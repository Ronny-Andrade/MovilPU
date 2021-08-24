import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { BotonsComponent } from './botons/botons.component';
import { FormsModule } from '@angular/forms';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuSearchComponent } from './header-menu-search/header-menu-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    BotonsComponent,
    HeaderMenuComponent,
    HeaderMenuSearchComponent
  ],
  exports:[
    HeaderComponent,
    InputComponent,
    BotonsComponent,
    HeaderMenuComponent,
    HeaderMenuSearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentesModule { }
