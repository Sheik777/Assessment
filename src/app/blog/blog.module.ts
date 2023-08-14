import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { DoluComponent } from './dolu/dolu.component';
import { BoluComponent } from './bolu/bolu.component';


@NgModule({
  declarations: [
    DoluComponent,
    BoluComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
