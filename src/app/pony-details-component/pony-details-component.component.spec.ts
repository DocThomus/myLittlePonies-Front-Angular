import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyDetailsComponentComponent } from './pony-details-component.component';

describe('PonyDetailsComponentComponent', () => {
  let component: PonyDetailsComponentComponent;
  let fixture: ComponentFixture<PonyDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonyDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
