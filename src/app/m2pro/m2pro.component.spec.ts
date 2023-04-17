import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2proComponent } from './m2pro.component';

describe('M2proComponent', () => {
  let component: M2proComponent;
  let fixture: ComponentFixture<M2proComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2proComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2proComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
