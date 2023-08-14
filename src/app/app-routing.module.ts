import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';


const routes: Routes = [
  { path: '', component: LeftComponent },
  { path: 'left', component: LeftComponent },
  { path: 'contact', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
