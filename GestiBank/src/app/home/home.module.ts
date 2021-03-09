import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { EditAgentModalComponent } from '../edit-agent-modal/edit-agent-modal.component';
import { AddAgentModalComponent } from '../add-agent-modal/add-agent-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, EditAgentModalComponent, AddAgentModalComponent]
})
export class HomePageModule {}
