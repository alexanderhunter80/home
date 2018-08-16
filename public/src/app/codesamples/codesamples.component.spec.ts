import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesamplesComponent } from './codesamples.component';

describe('CodesamplesComponent', () => {
  let component: CodesamplesComponent;
  let fixture: ComponentFixture<CodesamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
