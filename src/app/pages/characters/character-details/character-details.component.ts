import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  character: Character;
  characterData: Subscription;

  constructor(
    private characterService: CharacterService,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.characterData = this.characterService.getById(id)
      .subscribe(res => {
        this.loadDataForPresetation(res);
      });
  }

  loadDataForPresetation(res: Character): void {
    this.character = res;
    this.checkEmptyInformation();
  }

  checkEmptyInformation(): void {
    this.character.description = this.character.description === '' ?
    'Esse personagem não possui descrição' : this.character.description;
  }

  ngOnDestroy(): void {
    this.characterData.unsubscribe();
  }

}
