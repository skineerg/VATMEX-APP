import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineMembersPageRoutingModule } from './online-members-routing.module';

import { OnlineMembersPage } from './online-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineMembersPageRoutingModule
  ],
  declarations: [OnlineMembersPage]
})
export class OnlineMembersPageModule {}
