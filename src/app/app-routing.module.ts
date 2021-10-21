import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
    { path: '', component: TopComponent },
    { path: 'tech', component: TechComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
