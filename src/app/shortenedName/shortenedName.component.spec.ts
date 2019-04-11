import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <shortenedNameUpper> } from './<shortenedName>.component';

describe('ShortenedNameComponent', () => {
  let component: <shortenedNameUpper>;
  let fixture: ComponentFixture<<shortenedNameUpper>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <shortenedNameUpper> ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<shortenedNameUpper>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
