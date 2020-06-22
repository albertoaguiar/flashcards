import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../shared/flashcard';
import { FlashcardService } from '../shared/flashcard.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.page.html',
  styleUrls: ['./flashcard-detail.page.scss'],
})
export class FlashcardDetailPage implements OnInit {
  flashcard: Flashcard;
  id: number;
  flashcard_title: string;
  flashcard_desc: string;
  image: SafeUrl;

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.loadFlashcard(parseInt(idParam));

  }

  async loadFlashcard(id: number) {
    this.flashcard = await this.flashcardService.getById(id);

    this.flashcard_title = this.flashcard.flashcard_title;
    this.flashcard_desc = this.flashcard.flashcard_desc;

    //this.image = this.flashcard.image;

    var base64data;
    var reader = new FileReader();
    reader.readAsDataURL(this.flashcard.image);
    reader.onloadend = function() {
      base64data = reader.result;
    }

    this.image = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + base64data);
  }

}

