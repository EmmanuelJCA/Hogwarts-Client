import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdmissionRequest } from 'src/app/shared/model/admissionRequest';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddAdmissionRequestComponent } from '../../components/dashboard/add-admission-request/add-admission-request.component';
import { AdmissionRequestService } from 'src/app/shared/service/admissionRequests.service';
import { HouseService } from 'src/app/shared/service/house.service';
import { House } from 'src/app/shared/model/house';

@Component({
  selector: 'app-admission-requests',
  templateUrl: './admission-requests.component.html',
  styleUrls: ['./admission-requests.component.css']
})

export class AdmissionRequestsComponent implements OnInit, AfterViewInit {

  constructor(private _snackBar : MatSnackBar, public dialog : MatDialog, private _admissionRequestsService: AdmissionRequestService, private _houseService : HouseService) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dni', 'age', 'house', 'actions'];
  dataSource = new MatTableDataSource<AdmissionRequest>
  loading: boolean = false
  houses!: House[]
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAdmissionRequests()
    this.getHouses()
  }

  applyFilter(event: Event) : void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }  
  }

  getAdmissionRequests() : void {
    this.loading = true

    this._admissionRequestsService.getAdmissionRequests().subscribe({
      next: (data) => {
        this.loading = false
        this.dataSource.data = data
      },
      error: (e) => console.log(e)      
    })
  }

  addAspirant() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = {
      action: "Registrar",
      houses: this.houses
    }
    const dialogRef = this.dialog.open(AddAdmissionRequestComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this._admissionRequestsService.addAdmissionRequest(data).subscribe(data =>{
          this.triggerMessage(`Solicitud para ${data.aspirant?.firstName} ${data.aspirant?.lastName} creada con exito`)
          this.getAdmissionRequests()
        })
      }
    })
  }

  editAspirant(admissionRequest: AdmissionRequest, id: number) {      
    
    if(admissionRequest.admissionRequestId == null) {
      return
    }    
    
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = {
      action: "Editar",
      houses: this.houses,
      admissionRequestData: admissionRequest,
      aspirantData: admissionRequest.aspirant
    }
    const dialogRef = this.dialog.open(AddAdmissionRequestComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(data => {      
      if(data) {        
        this._admissionRequestsService.updateAdmissionRequest(id, data).subscribe(data =>{
          this.getAdmissionRequests()
        })
      }
    })
  }

  deleteAspirant(id: number) : void {
    this._admissionRequestsService.deleteAdmissionRequest(id).subscribe(() => {})
    this.triggerMessage('Avada kedavra! Solicitud eliminada con exito')
    this.getAdmissionRequests()
  }

  getHouses() : void {
    this._houseService.getHouses().subscribe({
      next: (data) => {
        this.houses = data
      }    
    }) 
  }
  triggerMessage(message: string) {
    this._snackBar.open(message, '', {duration: 4000, horizontalPosition: 'right'})
  }

}
