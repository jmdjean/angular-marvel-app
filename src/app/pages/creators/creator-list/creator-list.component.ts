import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseResourceApiData } from 'src/app/shared/model/baseResourceApiDataModel';
import { Creator } from '../shared/creator.model';
import { CreatorService } from '../shared/creator.service';

@Component({
  selector: 'app-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: ['./creator-list.component.scss']
})
export class CreatorListComponent implements OnInit, OnDestroy {

  creatorsData: Subscription;
  creators: Array<Creator> = [];
  apiData: BaseResourceApiData;
  pageSize = 6;
  offSet = 0;
  pageNumber = 1;
  pageTotalNumber = 0;

  constructor(
    private creatorService: CreatorService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadData(this.pageSize, 0);
  }

  loadData(pageSize: number, offSet: number): void {
    this.creatorsData = this.creatorService.getAll(pageSize, offSet)
      .subscribe(data => {
        this.buildDataForPresentation(data);
      });
  }

  buildDataForPresentation(data: BaseResourceApiData): void {
    this.creators = data.results;
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
    this.router.navigate(['/creators', id]);
  }

  ngOnDestroy() {
    this.creatorsData.unsubscribe();
  }
}
