import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquestionComponent } from './allquestion.component';

describe('AllquestionComponent', () => {
  let component: AllquestionComponent;
  let fixture: ComponentFixture<AllquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
