import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardFormPageRoutingModule } from './flashcard-form-routing.module';

import { FlashcardFormPage } from './flashcard-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardFormPageRoutingModule
  ],
  declarations: [FlashcardFormPage]
})
export class FlashcardFormPageModule {}
