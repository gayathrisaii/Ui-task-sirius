import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateindexComponent} from '../template-module/components/templateindex/templateindex.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateindexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatemoduleRoutingModule { }
