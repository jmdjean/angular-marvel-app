import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseResourceApiData } from 'src/app/shared/model/baseResourceApiDataModel';
import { Creator } from '../shared/creator.model';
import { CreatorService } from '../shared/creator.service';

@Component({
  selector: 'app-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.scss']
})
export class CreatorDetailsComponent implements OnInit {

  creator: Creator;
  creatorData: Subscription;

  constructor(
    private creatorsService: CreatorService,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.creatorData = this.creatorsService.getById(id)
      .subscribe(res => {
        this.creator = res;
      });
  }

  ngOnDestroy(): void {
    this.creatorData.unsubscribe();
  }
}
