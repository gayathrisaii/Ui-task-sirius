import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Author: Gayathri G
 * Desc : setting routing for modules
 */
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('../template-module/templatemodule.module').then(mod => mod.TemplatemoduleModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch : 'full'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch : 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash:true,
      anchorScrolling:'enabled'
    })
    //For anchor scrolling
  ],
  exports: [RouterModule]
})
export class AppmoduleRoutingModule { }
