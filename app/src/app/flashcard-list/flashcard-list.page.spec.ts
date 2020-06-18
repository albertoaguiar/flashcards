import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashcardListPage } from './flashcard-list.page';

describe('FlashcardListPage', () => {
  let component: FlashcardListPage;
  let fixture: ComponentFixture<FlashcardListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
