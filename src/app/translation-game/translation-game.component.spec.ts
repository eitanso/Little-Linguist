import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationGameComponent } from './translation-game.component';

describe('TranslationGameComponent', () => {
  let component: TranslationGameComponent;
  let fixture: ComponentFixture<TranslationGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslationGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslationGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
