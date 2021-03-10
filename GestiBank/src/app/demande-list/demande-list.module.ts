import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeListPageRoutingModule } from './demande-list-routing.module';

import { DemandeListPage } from './demande-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DemandeListPageRoutingModule
  ],
  declarations: [DemandeListPage]
})
export class DemandeListPageModule {}
