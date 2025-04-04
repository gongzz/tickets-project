import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketsListPageRoutingModule } from './tickets-list-routing.module';

import { TicketsListPage } from './tickets-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketsListPageRoutingModule,
    TicketsListPage
  ],
  declarations: []
})
export class TicketsListPageModule {}
