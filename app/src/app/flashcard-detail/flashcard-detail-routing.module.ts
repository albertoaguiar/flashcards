import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardDetailPage } from './flashcard-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FlashcardDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashcardDetailPageRoutingModule {}
