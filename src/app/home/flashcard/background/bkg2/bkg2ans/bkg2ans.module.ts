import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bkg2ansPage } from './bkg2ans.page';

const routes: Routes = [
  {
    path: '',
    component: Bkg2ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bkg2ansPage]
})
export class Bkg2ansPageModule {}
