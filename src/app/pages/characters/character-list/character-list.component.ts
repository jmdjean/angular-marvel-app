import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { BaseResourceApiData } from 'src/app/shared/model/baseResourceApiDataModel';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  charactersData: Subscription;
  characters: Array<Character> = [];
  apiData: BaseResourceApiData;
  pageSize = 6;
  offSet = 0;
  pageNumber = 1;
  pageTotalNumber = 0;

  constructor(
    private characterService: CharacterService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadData(this.pageSize, 0);
  }

  loadData(pageSize: number, offSet: number): void {
    this.charactersData = this.characterService.getAll(pageSize, offSet)
      .subscribe(data => {
        this.buildDataForPresentation(data);
      });
  }

  buildDataForPresentation(data: BaseResourceApiData): void {
    this.characters = data.results;
    this.setPaginationConfig(data);
  }

  setPaginationConfig(data: any): void {
    this.apiData = data;
    this.pageTotalNumber = Math.round(data.total / this.pageSize);
    this.pageNumber = Math.round((data.offset + this.pageSize) / this.pageSize);
  }

  goToLastPage(): void {
    if (this.pageNumber > 1) {
      this.loadData(this.pageSize, (this.pageNumber - 2) * this.pageSize);
    }
  }

  goToNextPage(): void {
    if (this.pageNumber < this.pageTotalNumber) {
      this.loadData(this.pageSize, this.pageNumber * this.pageSize);
    }
  }

  goToDetails(id: number): void {
    this.router.navigate(['/characters', id]);
  }

  ngOnDestroy() {
    this.charactersData.unsubscribe();
  }
}
