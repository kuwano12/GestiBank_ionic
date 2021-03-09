import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentListPageRoutingModule } from './agent-list-routing.module';

import { AgentListPage } from './agent-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgentListPageRoutingModule
  ],
  declarations: [AgentListPage]
})
export class AgentListPageModule {}
