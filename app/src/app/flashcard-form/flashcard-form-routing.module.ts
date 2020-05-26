import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardFormPage } from './flashcard-form.page';

const routes: Routes = [
  {
    path: '',
    component: FlashcardFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashcardFormPageRoutingModule {}
