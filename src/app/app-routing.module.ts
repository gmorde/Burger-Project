import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerShopComponent } from './components/burger-shop/burger-shop.component';
import { LoginComponent } from './components/login/login.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectContainComponent } from './components/project-contain/project-contain.component';


const routes: Routes = [
  { path: '', component: BurgerShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'project-contain', component: ProjectContainComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
