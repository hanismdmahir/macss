import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bkg3ansPage } from './bkg3ans.page';

const routes: Routes = [
  {
    path: '',
    component: Bkg3ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bkg3ansPage]
})
export class Bkg3ansPageModule {}
