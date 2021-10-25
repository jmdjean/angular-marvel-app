import { NgModule } from '@angular/core';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    SharedModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
