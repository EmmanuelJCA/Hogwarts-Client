import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdmissionRequestsComponent } from './pages/admission-requests/admission-requests.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ProgressbarComponent } from './components/dashboard/progressbar/progressbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdmissionRequestComponent } from './components/dashboard/add-admission-request/add-admission-request.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmissionRequestDetailsComponent } from './components/dashboard/admission-request-details/admission-request-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmissionRequestsComponent,
    SidebarComponent,
    ProgressbarComponent,
    AddAdmissionRequestComponent,
    AdmissionRequestDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
