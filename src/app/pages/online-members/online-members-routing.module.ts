import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineMembersPage } from './online-members.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineMembersPageRoutingModule {}
