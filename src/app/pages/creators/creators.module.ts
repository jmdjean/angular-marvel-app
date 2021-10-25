import { NgModule } from '@angular/core';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorListComponent } from './creator-list/creator-list.component';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreatorListComponent,
    CreatorDetailsComponent
  ],
  imports: [
    SharedModule,
    CreatorsRoutingModule
  ]
})
export class CreatorsModule { }
