import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoussefComponent } from './youssef.component';
import { Youssef1Component } from './youssef1/youssef1.component';
import { Youssef2Component } from './youssef2/youssef2.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: YoussefComponent,
    children: [
      {
        path: 'youssef1',
        component: Youssef1Component
      },
      {
        path: 'youssef2',
        component: Youssef2Component
      },
      {
        path: '**',
        redirectTo: 'youssef1'
      }

    ]
  }
]

@NgModule({
  declarations: [YoussefComponent, Youssef1Component, Youssef2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class YoussefModule { }
