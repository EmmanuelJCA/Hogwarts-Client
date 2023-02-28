import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatDialogModule} from '@angular/material/dialog'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'


@NgModule({
  declarations: [],
  imports: [MatCardModule],
  exports: [
    MatCardModule, 
    MatInputModule,
     MatFormFieldModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatButtonModule,
     MatCheckboxModule,
     MatTooltipModule,
     MatSnackBarModule,
     MatProgressBarModule,
     MatDialogModule,
     MatGridListModule,
     MatRadioModule,
     MatSelectModule
  ]
})
export class MaterialModule { }
