import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorldsComponent } from './our-worlds.component';

describe('OurWorldsComponent', () => {
  let component: OurWorldsComponent;
  let fixture: ComponentFixture<OurWorldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
