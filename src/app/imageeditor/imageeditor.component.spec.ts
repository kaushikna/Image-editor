import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageeditorComponent } from './imageeditor.component';

describe('ImageeditorComponent', () => {
  let component: ImageeditorComponent;
  let fixture: ComponentFixture<ImageeditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageeditorComponent]
    });
    fixture = TestBed.createComponent(ImageeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
