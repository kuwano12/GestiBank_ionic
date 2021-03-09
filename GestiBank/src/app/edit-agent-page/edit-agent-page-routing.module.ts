import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAgentPagePage } from './edit-agent-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditAgentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAgentPagePageRoutingModule {}
