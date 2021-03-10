import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeListPage } from './demande-list.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeListPageRoutingModule {}
