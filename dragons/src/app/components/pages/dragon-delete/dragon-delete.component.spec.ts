import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDeleteComponent } from './dragon-delete.component';

describe('DragonDeleteComponent', () => {
  let component: DragonDeleteComponent;
  let fixture: ComponentFixture<DragonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
