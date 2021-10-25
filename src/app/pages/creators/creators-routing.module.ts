import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';
import { CreatorListComponent } from './creator-list/creator-list.component';

const routes: Routes = [
  { path: '', component: CreatorListComponent},
  { path: ':id', component: CreatorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
