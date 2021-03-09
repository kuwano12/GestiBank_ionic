import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAgentPagePageRoutingModule } from './edit-agent-page-routing.module';

import { EditAgentPagePage } from './edit-agent-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAgentPagePageRoutingModule
  ],
  declarations: [EditAgentPagePage]
})
export class EditAgentPagePageModule {}
