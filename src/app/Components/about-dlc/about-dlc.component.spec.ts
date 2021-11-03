import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDlcComponent } from './about-dlc.component';

describe('AboutDlcComponent', () => {
  let component: AboutDlcComponent;
  let fixture: ComponentFixture<AboutDlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
