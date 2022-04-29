import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregameAdvancementListComponent } from './pregame-advancement-list.component';

describe('PreGameAdvancementListComponent', () => {
  let component: PregameAdvancementListComponent;
  let fixture: ComponentFixture<PregameAdvancementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregameAdvancementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregameAdvancementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
