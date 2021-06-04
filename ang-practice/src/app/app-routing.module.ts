import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsUserComponent } from './pages/contributors-user/contributors-user.component';

const routes: Routes = [
  {path:'', component: ContributorsUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
