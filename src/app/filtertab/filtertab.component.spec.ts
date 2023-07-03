import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertabComponent } from './filtertab.component';

describe('FiltertabComponent', () => {
  let component: FiltertabComponent;
  let fixture: ComponentFixture<FiltertabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltertabComponent]
    });
    fixture = TestBed.createComponent(FiltertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
