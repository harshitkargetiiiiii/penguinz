import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    data: {
      title: "Agency | Unice Landing Page",
      content: "Agency Angular 8 landing page with Angular Universal | SSR | SEO friendly"
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
