import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashcardDetailPage } from './flashcard-detail.page';

describe('FlashcardDetailPage', () => {
  let component: FlashcardDetailPage;
  let fixture: ComponentFixture<FlashcardDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
