import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Boxmodel2Page } from './boxmodel2.page';

const routes: Routes = [
  {
    path: '',
    component: Boxmodel2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Boxmodel2Page]
})
export class Boxmodel2PageModule {}
