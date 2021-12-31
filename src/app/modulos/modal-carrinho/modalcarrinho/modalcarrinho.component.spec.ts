import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalcarrinhoComponent } from './modalcarrinho.component';

describe('ModalcarrinhoComponent', () => {
  let component: ModalcarrinhoComponent;
  let fixture: ComponentFixture<ModalcarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalcarrinhoComponent],
      imports: [
        MatDialogModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue:[]
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: []
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
