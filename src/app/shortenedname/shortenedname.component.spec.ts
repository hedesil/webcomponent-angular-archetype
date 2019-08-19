import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <shortenedNameComp> } from './<shortenedName>.component';

describe('<shortenedNameComp>', () => {
  let component: <shortenedNameComp>;
  let fixture: ComponentFixture<<shortenedNameComp>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <shortenedNameComp> ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<shortenedNameComp>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
