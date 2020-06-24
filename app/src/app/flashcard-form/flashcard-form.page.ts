import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../shared/flashcard';
import { FlashcardService } from '../shared/flashcard.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.page.html',
  styleUrls: ['./flashcard-form.page.scss'],
})
export class FlashcardFormPage implements OnInit {
  title: string = 'NOVO FLASHCARD';
  page_desc: string = 'ADICIONAR FLASHCARD';
  flashcard: Flashcard;

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private camera: Camera,
    private platform: Platform,
    private file: File
  ) { }

  ngOnInit() {
    this.flashcard = new Flashcard();

    const idParam = this.route.snapshot.paramMap.get('id');

    if(idParam) {
      this.title = 'EDITAR FLASHCARD';
      this.page_desc = this.title;
      this.loadFlashcard(parseInt(idParam));
    }
  }

  async loadFlashcard(id: number) {
    this.flashcard = await this.flashcardService.getById(id);
  }

  async onSubmit() {
    console.log(this.flashcard);
    try {
      const result = await this.flashcardService.save(this.flashcard);
      this.flashcard.id = result.insertId;

      this.showToast('Sucesso', 'Flashcard salvo com sucesso!', 'success', 3000);

    } catch (error) {
      this.showToast('Erro', 'Ocorreu um erro ao tentar salvar o flashcard!', 'danger', 3000);
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

  async openGalery() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };

    try {
      const image: string = await this.camera.getPicture(options);
      this.flashcard.image = image;

      this.showToast('Sucesso', 'Upload de imagem realizada com sucesso!', 'success', 1000);

    } catch (error) {
      console.error(error);
    }
  }

}