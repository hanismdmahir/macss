import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Boxmodel3Page } from './boxmodel3.page';

const routes: Routes = [
  {
    path: '',
    component: Boxmodel3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Boxmodel3Page]
})
export class Boxmodel3PageModule {}
