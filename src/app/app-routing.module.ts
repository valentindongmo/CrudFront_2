import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './pages/subject/subject.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path : 'subject', component: SubjectComponent },
  { path : 'user', component: HomeComponent },
  { path : '', redirectTo: 'subject', pathMatch:'full'},
  { path : '**', redirectTo: 'user', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],

  exports:[RouterModule]
})
export class AppRoutingModule { }
