import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatComponent } from './candidat.component';

describe('CandidatComponent', () => {
  let component: CandidatComponent;
  let fixture: ComponentFixture<CandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatComponent]
    });
    fixture = TestBed.createComponent(CandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
