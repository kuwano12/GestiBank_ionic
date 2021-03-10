import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentAffectedDemandeListPageRoutingModule } from './agent-affected-demande-list-routing.module';

import { AgentAffectedDemandeListPage } from './agent-affected-demande-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentAffectedDemandeListPageRoutingModule
  ],
  declarations: [AgentAffectedDemandeListPage]
})
export class AgentAffectedDemandeListPageModule {}
