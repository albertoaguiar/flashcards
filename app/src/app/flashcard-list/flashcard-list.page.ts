import { Flashcard } from './../shared/flashcard';
import { FlashcardService } from './../shared/flashcard.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.page.html',
  styleUrls: ['./flashcard-list.page.scss'],
})
export class FlashcardListPage implements OnInit {
  flashcards: Flashcard[] = [];
  
  constructor(
    private flashcardService: FlashcardService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadFlashcards(); 
  }

  async loadFlashcards() {
    this.flashcards = await this.flashcardService.getAll();
  }

  async delete(flashcard: Flashcard) {
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir o flashcard: ${flashcard.flashcard_title}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executeDelete(flashcard);
          }
        }
      ]
    });

    alert.present();
  }

  async executeDelete(flashcard: Flashcard) {
    try {
      await this.flashcardService.delete(flashcard.id);

      const index = this.flashcards.indexOf(flashcard);
      this.flashcards.splice(index, 1);

      this.showToast('Sucesso', 'Flashcard excluído com sucesso!', 'success', 3000);
    } catch (error) {
      this.showToast('Erro', 'Ocorreu um erro ao tentar excluir o flashcard!', 'danger', 3000);
    }
  }

  async showToast(header: string, message: string, color: string, duration: number) {
    const toast = await this.toastCtrl.create({
      header: header,
      message: message,
      color: color,
      position: 'middle',
      duration: duration
    });

    toast.present();
  }

}
