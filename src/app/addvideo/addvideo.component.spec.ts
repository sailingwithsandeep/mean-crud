import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvideoComponent } from './addvideo.component';

describe('AddvideoComponent', () => {
  let component: AddvideoComponent;
  let fixture: ComponentFixture<AddvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
