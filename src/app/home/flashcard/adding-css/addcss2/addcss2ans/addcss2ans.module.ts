import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Addcss2ansPage } from './addcss2ans.page';

const routes: Routes = [
  {
    path: '',
    component: Addcss2ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Addcss2ansPage]
})
export class Addcss2ansPageModule {}
