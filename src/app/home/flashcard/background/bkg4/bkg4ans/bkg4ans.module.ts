import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bkg4ansPage } from './bkg4ans.page';

const routes: Routes = [
  {
    path: '',
    component: Bkg4ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bkg4ansPage]
})
export class Bkg4ansPageModule {}
