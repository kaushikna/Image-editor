import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAPCreatorComponent } from './mapcreator.component';

describe('MAPCreatorComponent', () => {
  let component: MAPCreatorComponent;
  let fixture: ComponentFixture<MAPCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MAPCreatorComponent]
    });
    fixture = TestBed.createComponent(MAPCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
