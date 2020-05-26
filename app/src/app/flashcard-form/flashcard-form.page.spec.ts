import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashcardFormPage } from './flashcard-form.page';

describe('FlashcardFormPage', () => {
  let component: FlashcardFormPage;
  let fixture: ComponentFixture<FlashcardFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
