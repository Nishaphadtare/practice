import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndirectivesComponent } from './assigndirectives.component';

describe('AssigndirectivesComponent', () => {
  let component: AssigndirectivesComponent;
  let fixture: ComponentFixture<AssigndirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigndirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigndirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
