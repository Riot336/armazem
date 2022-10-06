import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClianteInserirComponent } from './cliante-inserir.component';

describe('ClianteInserirComponent', () => {
  let component: ClianteInserirComponent;
  let fixture: ComponentFixture<ClianteInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClianteInserirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClianteInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
