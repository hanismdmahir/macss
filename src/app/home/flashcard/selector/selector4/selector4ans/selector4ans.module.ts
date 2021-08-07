import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Selector4ansPage } from './selector4ans.page';

const routes: Routes = [
  {
    path: '',
    component: Selector4ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Selector4ansPage]
})
export class Selector4ansPageModule {}
