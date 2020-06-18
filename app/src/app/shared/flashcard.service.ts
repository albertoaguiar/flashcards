import { Injectable } from '@angular/core';
import { DatabaseService } from '../core/service/database.service';
import { Flashcard } from './flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private db: DatabaseService) { }

  save(flashcard: Flashcard) {
    if(flashcard.id > 0) {
      return this.update(flashcard);
    } else {
      return this.insert(flashcard);
    }
  }

  private insert(flashcard: Flashcard) {
    const sql = 'insert into flashcards (flashcard_title, flashcard_desc, image) values (?, ?, ?)';
    const data = [flashcard.flashcard_title, flashcard.flashcard_desc, flashcard.image];

    return this.db.executeSQL(sql, data);
  }

  private update(flashcard: Flashcard) {
    const sql = 'update flashcards set flashcard_title=?, flashcard_desc=?, image=? where id=?';
    const data = [flashcard.flashcard_title, flashcard.flashcard_desc, flashcard.image, flashcard.id];

    return this.db.executeSQL(sql, data);
  }

  delete(id: number) {
    const sql = 'delete from flashcards where id=?';
    const data = [id];

    return this.db.executeSQL(sql, data);
  }

  async getById(id: number) {
    const sql = 'select * from flashcards where id=?';
    const data = [id];

    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;

    const flashcard = new Flashcard();

    if(rows && rows.length > 0) {
      const item = rows.item(0);
      flashcard.id = item.id;
      flashcard.flashcard_title = item.flashcard_title;
      flashcard.flashcard_desc = item.flashcard_desc;
      flashcard.image = item.image;
    }

    return flashcard;

  }

  async getAll(){
    const sql = 'select * from flashcards';
    const result = await this.db.executeSQL(sql);

    const flashcards = this.fillFlashcards(result.rows);

    return flashcards;
  }

  private fillFlashcards(rows: any) {
    const flashcards: Flashcard[] = [];

    for(let i=0; i< rows.length; i++) {
      const item = rows.item(i);
      const flashcard = new Flashcard();

      flashcard.id = item.id;
      flashcard.flashcard_title = item.flashcard_title;
      flashcard.flashcard_desc = item.flashcard_desc;
      flashcard.image = item.image;

      flashcards.push(flashcard);
    }

    return flashcards;
  } 
}
