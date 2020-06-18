import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../shared/flashcard';
import { FlashcardService } from '../shared/flashcard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.page.html',
  styleUrls: ['./flashcard-detail.page.scss'],
})
export class FlashcardDetailPage implements OnInit {
  flashcard: Flashcard;

  constructor(private flashcardService: FlashcardService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.loadFlashcard(parseInt(idParam));
  }

  async loadFlashcard(id: number) {
    this.flashcard = await this.flashcardService.getById(id);
  }

}
