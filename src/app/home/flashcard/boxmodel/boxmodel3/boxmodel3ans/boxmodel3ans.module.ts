import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Boxmodel3ansPage } from './boxmodel3ans.page';

const routes: Routes = [
  {
    path: '',
    component: Boxmodel3ansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Boxmodel3ansPage]
})
export class Boxmodel3ansPageModule {}
