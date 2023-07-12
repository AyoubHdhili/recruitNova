import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanRessourcesComponent } from './human-ressources.component';

describe('HumanRessourcesComponent', () => {
  let component: HumanRessourcesComponent;
  let fixture: ComponentFixture<HumanRessourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanRessourcesComponent]
    });
    fixture = TestBed.createComponent(HumanRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
