import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoniesComponentComponent } from './ponies-component.component';

describe('PoniesComponentComponent', () => {
  let component: PoniesComponentComponent;
  let fixture: ComponentFixture<PoniesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoniesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoniesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
