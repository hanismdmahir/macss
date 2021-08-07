import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Boxmodel2ansPage } from './boxmodel2ans.page';

const routes: Routes = [
  {
    path: '',
    component: Boxmodel2ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Boxmodel2ansPage]
})
export class Boxmodel2ansPageModule {}
