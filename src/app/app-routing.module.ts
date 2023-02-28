import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionRequestDetailsComponent } from './components/dashboard/admission-request-details/admission-request-details.component';
import { AdmissionRequestsComponent } from './pages/admission-requests/admission-requests.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'dashboard', children: [
    {path: '', redirectTo: 'home',pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'admission-requests', component: AdmissionRequestsComponent},
    {path: 'admission-request/:id', component: AdmissionRequestDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
