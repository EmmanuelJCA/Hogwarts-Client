import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmissionRequestComponent } from './add-admission-request.component';

describe('AddAdmissionRequestComponent', () => {
  let component: AddAdmissionRequestComponent;
  let fixture: ComponentFixture<AddAdmissionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmissionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdmissionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
