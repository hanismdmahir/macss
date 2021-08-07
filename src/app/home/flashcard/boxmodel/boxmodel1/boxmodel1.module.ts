import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Boxmodel1Page } from './boxmodel1.page';

const routes: Routes = [
  {
    path: '',
    component: Boxmodel1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Boxmodel1Page]
})
export class Boxmodel1PageModule {}
