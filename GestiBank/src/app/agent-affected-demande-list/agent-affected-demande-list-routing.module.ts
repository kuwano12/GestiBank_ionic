import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentAffectedDemandeListPage } from './agent-affected-demande-list.page';

const routes: Routes = [
  {
    path: '',
    component: AgentAffectedDemandeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentAffectedDemandeListPageRoutingModule {}
