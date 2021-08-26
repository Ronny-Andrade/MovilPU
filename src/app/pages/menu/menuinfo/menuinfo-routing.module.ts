import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuinfoPage } from './menuinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MenuinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuinfoPageRoutingModule {}
