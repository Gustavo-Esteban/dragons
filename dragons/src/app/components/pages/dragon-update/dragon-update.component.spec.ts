import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonUpdateComponent } from './dragon-update.component';

describe('DragonUpdateComponent', () => {
  let component: DragonUpdateComponent;
  let fixture: ComponentFixture<DragonUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
