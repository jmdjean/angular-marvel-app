import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from '../core/components/bread-crumb/bread-crumb.component';


@NgModule({
  declarations: [
    PageHeaderComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    RouterModule,

    PageHeaderComponent,
    BreadCrumbComponent
  ]
})
export class SharedModule { }
