import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmissionRequest } from 'src/app/shared/model/admissionRequest';
import { Aspirant } from 'src/app/shared/model/aspirant';
import { House } from 'src/app/shared/model/house';

@Component({
  selector: 'app-add-admission-request',
  templateUrl: './add-admission-request.component.html',
  styleUrls: ['./add-admission-request.component.css']
})
export class AddAdmissionRequestComponent implements OnInit {

  form !: FormGroup
  action !: string
  houses !: House[]
  admissionRequestData !: AdmissionRequest
  aspirantData !: Aspirant
  firstName !: string

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddAdmissionRequestComponent>
  ) { 
    this.action = data.action
    this.houses = data.houses
    this.admissionRequestData = data.admissionRequestData
    this.aspirantData = data.aspirantData
  }

  ngOnInit(): void {    
    
    this.form = this.fb.group({
      firstName : [this.aspirantData?.firstName, [Validators.required, Validators.maxLength(20)]],
      lastName : [this.aspirantData?.lastName, [Validators.required, Validators.maxLength(20)]],
      dni : [this.aspirantData?.dni, [Validators.required, Validators.maxLength(10)]],
      age: [this.aspirantData?.age, [Validators.required, Validators.maxLength(2)]],
      gender: [this.aspirantData?.gender, [Validators.required, Validators.maxLength(1)]],
      houseId: [this.admissionRequestData?.houseId, [Validators.required]]
    })
    
  }

  closeModal() {

  }

  addNewAdmissionRequest() {

    this.aspirantData = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      gender: this.form.value.gender,
      dni: this.form.value.dni,
      age: this.form.value.age
    }
    
    this.admissionRequestData = {
      admissionRequestId: this.admissionRequestData?.admissionRequestId,
      aspirantId: this.admissionRequestData?.aspirantId,
      startDate: this.admissionRequestData?.startDate,
      houseId: this.form.value.houseId,
      aspirant: this.aspirantData
    }
    
    this.dialogRef.close(this.admissionRequestData)
  }

}

