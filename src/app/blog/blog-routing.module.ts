import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoluComponent } from './bolu/bolu.component';
import { DoluComponent } from './dolu/dolu.component';

const routes: Routes = [
  
  { path: '', component: BoluComponent },
  { path: 'bolu', component: BoluComponent },
  { path: 'dolu', component: DoluComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
