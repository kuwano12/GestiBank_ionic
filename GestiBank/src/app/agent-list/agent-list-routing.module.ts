import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentListPage } from './agent-list.page';

const routes: Routes = [
  {
    path: '',
    component: AgentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentListPageRoutingModule {}
