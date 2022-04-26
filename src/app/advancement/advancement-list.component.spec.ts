import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancementListComponent } from './advancement-list.component';

describe('AdvancementListComponent', () => {
  let component: AdvancementListComponent;
  let fixture: ComponentFixture<AdvancementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
